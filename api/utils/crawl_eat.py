import base64

from bs4 import BeautifulSoup

from .utils import fetch_html


async def extract_restaurant(url: str):
    html_page = await fetch_html(url)
    soup = BeautifulSoup(html_page, 'html.parser')

    map_class_info = {'address': 'fhGHT',
                      'phone': 'iPqaD _F G- ddFHE eKwUx',
                      'website': 'dOGcA Ci Wc _S C fhGHT',
                      'open_time': 'dauAM'}
    selects = soup.find_all('div', class_='eSAOV H3')

    data = {}
    for info in map_class_info:
        tag = 'a'
        if info == 'open_time':
            tag = 'div'

        data[info] = selects[1].find(tag, class_=map_class_info[info])
        if data[info] is not None:
            if info == 'website':
                # decode base64 and strip
                data[info] = base64.b64decode(
                    data[info].get('data-encoded-url')).decode()[4:-4]
            else:
                data[info] = data.get(info).get_text().replace('\xa0', ' ')
                if info == 'open_time':
                    time = data[info][len(' Open now: '):]
                    if len(time) > 20:
                        data[info] = time[0:len(time) // 2] + \
                                     ' / ' + time[len(time) // 2:]
                    else:
                        data[info] = time
                        if 'See all hours' in time:
                            data[info] = ''

    details = {}
    # Check layout 1

    layout_select = soup.find('div', class_='eojKU R2 H h')

    tag = {'name': 'csKes Wf b',
           'content': 'bYIkW'}

    if layout_select is None:
        layout_select = soup.find('div', class_='fbAWK')
        tag = {'name': 'dMshX b', 'content': 'cfvAV'}

    names = layout_select.find_all(
        'div', class_=tag['name'])
    contents = layout_select.find_all(
        'div', class_=tag['content'])
    for i in range(len(names)):
        name = names[i].get_text().strip().lower().replace(' ', '_')
        details[name] = contents[i].get_text().strip()
    data['details'] = details

    data['name'] = soup.find('h1', class_='fHibz').text

    return data


async def extract_link_top_restaurant(url: str):
    html_page = await fetch_html(url)
    soup = BeautifulSoup(html_page, 'html.parser')
    map_class_links = {'link': 'bHGqj Cj b'}
    select_links = soup.find('div', class_='deQwQ').find_all(
        'a', class_=map_class_links['link'])
    links = {}
    for link in select_links:
        links[link.get_text()] = link.get('href')
    return links


async def extract_top_restaurant(url):
    links_restaurant = await extract_link_top_restaurant(url)

    data_restaurant = {}
    for link in links_restaurant:
        try:
            data_restaurant[link] = await extract_restaurant(
                'https://www.tripadvisor.com' + links_restaurant[link])
        except:
            # print(link)
            pass

    return data_restaurant


if __name__ == '__main__':
    from pprint import pprint
    import asyncio

    url = 'https://www.tripadvisor.com/Restaurant_Review-g303946-d19454105-Reviews-Pizza_Leo-Vung_Tau_Ba_Ria_Vung_Tau_Province.html'
    # TODO: 'https://www.tripadvisor.com/Restaurant_Review-g303946-d4793485-Reviews-Matildas-Vung_Tau_Ba_Ria_Vung_Tau_Province.html'
    # open time (close in x minues)
    pprint(asyncio.run(extract_restaurant(url)))
