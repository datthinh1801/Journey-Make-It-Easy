from bs4 import BeautifulSoup

from .utils import fetch_html


async def extract_attractions(url: str):
    """Extract attractions of a given destination."""
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
    """Extract all attractions of a given destination."""
    html_page = await fetch_html(url)
    soup = BeautifulSoup(html_page, 'html.parser')

    select_top_attractions = soup.find_all(
        'div', class_='fVbwn cdAAV cagLQ eZTON dofsx')

    relative_urls_site = {}
    for select in select_top_attractions:
        data_link = select.find('a')
        if data_link is not None:
            name = select.find(
                'div', class_='bUshh o csemS').get_text().strip()
            relative_urls_site[name] = data_link.get('href')

    data_site = {}

    for site in relative_urls_site:
        data_site[site] = await extract_attractions(
            'https://www.tripadvisor.com' + relative_urls_site[site], session)

    return data_site


async def main():
    from pprint import pprint
    url = 'https://www.tripadvisor.com/Attraction_Review-g303946-d12374392-Reviews-GreenlinesDP_Fast_Ferry-Vung_Tau_Ba_Ria_Vung_Tau_Province.html'
    pprint(await extract_attractions(url))
    # TODO: https://www.tripadvisor.com/Attraction_Review-g303946-d11950036-Reviews-Christ_the_King-Vung_Tau_Ba_Ria_Vung_Tau_Province.html


if __name__ == '__main__':
    import asyncio

    asyncio.run(main())
