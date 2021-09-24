from bs4 import BeautifulSoup
from aiohttp import ClientSession

from utils import fetch_html


async def extract_site_data(url: str, session: ClientSession):
    html_page = await fetch_html(url, session)
    soup = BeautifulSoup(html_page, 'html.parser')

    map_class_for_open_time = {'Open Time': 'bHGlw'}

    map_class_to_data = {'About': 'WlYyy diXIH dDKKM',
                         'Suggested Duration': 'cYygO _c',
                         'Admission tickets': 'WlYyy cPsXC cMKSg',
                         'Images': 'eMVst _R w h GA'
                         }
    map_class_for_address = {'Address': 'WlYyy cacGK Wb'}
    map_info = {}
    for i in map_class_to_data:
        if i != 'Images':
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
            'span', class_=map_class_for_address['Address'])
    except:
        data = None

    if data is not None:
        map_info['Address'] = data.get_text().strip()
    else:
        map_info['Address'] = ''
    # print(map_info)

    # In case open time not found
    data = None
    try:
        data = soup.find('div', class_='WlYyy diXIH dTqpp').find(
            'span', class_=map_class_for_open_time['Open Time'])
    except:
        data = None
    if data is not None:
        map_info['Open Time'] = data.get_text().strip()
    else:
        map_info['Open Time'] = ''

    return map_info


async def extract_full_site_of_city(url: str, session: ClientSession):
    html_page = await fetch_html(url, session)
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
        data_site[site] = await extract_site_data(
            'https://www.tripadvisor.com' + relative_urls_site[site], session)

    return data_site
