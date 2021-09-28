import asyncio
from bs4 import BeautifulSoup

# change this to .utils if use python shell
from utils import fetch_html, BASE_URL


async def extract_attraction_data(url: str):
    """Extract information of an attraction, given its full URL."""
    html_page = await fetch_html(url)
    soup = BeautifulSoup(html_page, 'html.parser')

    map_class_for_open_time = {'open_time': 'bHGlw'}

    map_class_to_data = {'about': 'WlYyy diXIH dDKKM',
                         'suggested_duration': 'cYygO _c',
                         'admission_ticket': 'WlYyy cPsXC cMKSg',
                         'images': 'eMVst _R w h GA'
                         }
    map_class_for_address = {'address': 'WlYyy cacGK Wb'}
    map_info = {}
    for i in map_class_to_data:
        if i != 'images':
            data = soup.find('div', class_='fNXCm A').find(
                'div', class_=map_class_to_data[i])
            if data is not None:
                map_info[i] = data.get_text().strip()
            else:
                map_info[i] = ''
        else:
            data = soup.find('div', class_='fNXCm A').find_all(
                'div', class_=map_class_to_data[i])
            links = []
            for link in data:
                l_image = link.get('style')[len('background-image:url('):-1]

                # photo-l is small images, change to photo-o to get full size images
                if 'photo-l' in l_image:
                    links.append(l_image)
            map_info[i] = links

    # In case address not found
    try:
        data = soup.find('div', class_='gaAck').find(
            'span', class_=map_class_for_address['address'])
    except:
        data = None

    if data is not None:
        map_info['address'] = data.get_text().strip()
    else:
        map_info['address'] = ''

    # In case open time not found
    try:
        data = soup.find('div', class_='WlYyy diXIH dTqpp'). \
            find('span', class_=map_class_for_open_time['open_time'])
    except:
        data = None
    if data is not None:
        map_info['open_time'] = data.get_text().strip()
    else:
        map_info['open_time'] = ''

    map_info['name'] = soup.find('h1', class_='WlYyy cPsXC GeSzT').text

    return map_info


async def extract_all_attractions(url: str):
    """Extract all attractions of a city, given its URL."""
    html_page = await fetch_html(url)
    soup = BeautifulSoup(html_page, 'html.parser')

    select_top_attractions = soup.find_all(
        'div', class_='fVbwn cdAAV cagLQ eZTON dofsx')

    relative_urls_site = []
    for select in select_top_attractions:
        data_link = select.find('a')
        if data_link is not None:
            relative_urls_site.append(data_link.get('href'))

    tasks = []
    for site in relative_urls_site:
        tasks.append(
            asyncio.create_task(extract_attraction_data(BASE_URL + site)))
    return await asyncio.gather(*tasks)


if __name__ == '__main__':
    from pprint import pprint

    url = 'https://www.tripadvisor.com/Attractions-g293925-Activities-Ho_Chi_Minh_City.html'
    pprint(asyncio.run(extract_all_attractions(url)))