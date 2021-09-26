import asyncio
import base64

from bs4 import BeautifulSoup

# change this to .utils if use python shell
from utils import fetch_html, BASE_URL


async def extract_restaurant_data(url: str):
    """Extract information of a restaurant, given its full URL."""
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
    """Extract top restaurants from the Restaurants page of a destination."""
    html_page = await fetch_html(url)
    soup = BeautifulSoup(html_page, 'html.parser')
    map_class_links = {'link': 'bHGqj Cj b'}

    select_links = soup.find('div', class_='deQwQ').find_all(
        'a', class_=map_class_links['link'])

    links = []
    for link in select_links:
        links.append(link.get('href'))
    return links


async def extract_top_restaurant(url: str):
    """Extract information of top restaurants of a destination, given the destination's full URL."""
    links_restaurant = await extract_link_top_restaurant(url)

    tasks = []
    for link in links_restaurant:
        try:
            tasks.append(
                asyncio.create_task(extract_restaurant_data(BASE_URL + link)))
        except:
            pass

    return await asyncio.gather(*tasks)


if __name__ == '__main__':
    from pprint import pprint

    url = 'https://www.tripadvisor.com/Restaurants-g303946-Vung_Tau_Ba_Ria_Vung_Tau_Province.html'
    pprint(asyncio.run(extract_top_restaurant(url)))
