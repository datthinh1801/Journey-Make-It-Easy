from bs4 import BeautifulSoup

import requests


def extract_site_data(url):
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0'}
    r = requests.get(url, headers=headers)

    print('done request')
    soup = BeautifulSoup(r.content, 'html.parser')

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
            if data != None:
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
    data = None
    try:
        data = soup.find('div', class_='gaAck').find(
            'span', class_=map_class_for_address['Address'])
    except:
        data = None

    if data != None:
        map_info['Address'] = data.get_text().strip()
    else:
        map_info['Address'] = ''
    # print(map_info)

    # In case opentime not found
    data = None
    try:
        data = soup.find('div', class_='WlYyy diXIH dTqpp').find(
            'span', class_=map_class_for_open_time['Open Time'])
    except:
        data = None
    if data != None:
        map_info['Open Time'] = data.get_text().strip()
    else:
        map_info['Open Time'] = ''

    return map_info


def Extract_full_site_of_city(url):
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0'}
    r = requests.get(url, headers=headers)

    print('done request')

    soup = BeautifulSoup(r.content, 'html.parser')

    select_top_attractions = soup.find_all(
        'div', class_='fVbwn cdAAV cagLQ eZTON dofsx')

    relative_urls_site = {}
    for select in select_top_attractions:
        data_link = select.find('a')
        if data_link != None:
            name = select.find(
                'div', class_='bUshh o csemS').get_text().strip()
            relative_urls_site[name] = data_link.get('href')

    data_site = {}

    for site in relative_urls_site:
        data_site[site] = extract_site_data(
            'https://www.tripadvisor.com'+relative_urls_site[site])

    return data_site


