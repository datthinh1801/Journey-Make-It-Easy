from bs4 import BeautifulSoup

import requests
import base64


def extract_site_data_eat(url):
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0'}
    r = requests.get(url, headers=headers)

    print('done request')
    soup = BeautifulSoup(r.content, 'html.parser')
    map_class_info = {'Address': 'fhGHT', 'Phone': 'iPqaD _F G- ddFHE eKwUx',
                      'Website': 'dOGcA Ci Wc _S C fhGHT', 'Open Time': 'dauAM'}
    selects = soup.find_all('div', class_='eSAOV H3')

    data = {}
    for info in map_class_info:
        tag = 'a'
        if info == 'Open Time':
            tag = 'div'

        data[info] = selects[1].find(tag, class_=map_class_info[info])
        if data[info] != None:
            if info == 'Website':
                # decode base64 and strip
                data[info] = base64.b64decode(
                    data[info].get('data-encoded-url')).decode()[4:-4]
            else:
                data[info] = data[info].get_text().replace('\xa0', ' ')
                if info == 'Open Time':
                    time = data[info][len(' Open now: '):]
                    if len(time) > 20:
                        data[info] = time[0:len(time)//2] + \
                            ' / ' + time[len(time)//2:]
                    else:
                        data[info] = time
                        if 'See all hours' in time:
                            data[info] = ''

    details = {}
    # Check layout 1

    layout_select = soup.find('div', class_='eojKU R2 H h')

    tag = {'name': 'csKes Wf b', 'content': 'bYIkW'}

    if layout_select == None:
        layout_select = soup.find('div', class_='fbAWK')
        tag = {'name': 'dMshX b', 'content': 'cfvAV'}

    names = layout_select.find_all(
        'div', class_=tag['name'])
    contents = layout_select.find_all(
        'div', class_=tag['content'])
    for i in range(len(names)):
        name = names[i].get_text().strip()
        details[name] = contents[i].get_text().strip()
    data['Details'] = details

    return data


def Extract_link_top_restaurant(url):
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0'}
    r = requests.get(url, headers=headers)

    print('done request')
    soup = BeautifulSoup(r.content, 'html.parser')
    map_class_links = {'link': 'bHGqj Cj b'}
    select_links = soup.find('div', class_='deQwQ').find_all(
        'a', class_=map_class_links['link'])
    links = {}
    for link in select_links:
        links[link.get_text()] = link.get('href')
    return links


def Extract_top_restaurant(url):
    links_restaurant = Extract_link_top_restaurant(url)

    data_restaurant = {}
    for link in links_restaurant:
        try:
            data_restaurant[link] = extract_site_data_eat(
                'https://www.tripadvisor.com'+links_restaurant[link])
        except:
            print(link)

    return data_restaurant
