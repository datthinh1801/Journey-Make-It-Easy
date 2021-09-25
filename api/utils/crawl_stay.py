import asyncio
from bs4 import BeautifulSoup
from aiohttp import ClientSession

from utils import fetch_html


async def extract_stay_data(url: str, session: ClientSession):
    html_page = await fetch_html(url, session)
    soup = BeautifulSoup(html_page, 'html.parser')

    map_class_for_address = {
        'Parrent_div': 'ui_container is-fluid page-section accessible_red_3',
        'Name:': ['h1', 'fkWsC b d Pn'],
        'Address': ['span', 'ceIOZ yYjkv']
    }

    map_class_for_contact = {
        'Parrent_div': 'TDJYF F1',
        'Phone': ['a', 'bIWzQ'],
        'Email': ['a', 'bIWzQ fWKZw']
    }

    map_class_about = {
        'Parrent_div': 'eZQpm _T Z BB',
        'About': ['div', 'pIRBV _T'],
        'Feature': ['div', 'ssr-init-26f']
    }

    final_map = [map_class_for_address, map_class_for_contact, map_class_about]

    map_info = {}
    for map_data in final_map:
        for i in map_data:
            if i != 'Parrent_div':
                try:
                    data = soup.find('div', class_=map_data['Parrent_div']).find(map_data[i][0], class_=map_data[i][1])
                except:
                    data = None
                if data is not None:
                    if i == 'Email':
                        map_info[i] = data['href'].replace('mailto:', '')
                    elif i == 'Feature':
                        data = soup.find('div', class_=map_data['Parrent_div']). \
                            find_all(map_data[i][0], class_=map_data[i][1])
                        all_feature = []
                        for z in data:
                            all_feature.append(z.get('data-ssrev-handlers'))
                        map_info[i] = all_feature
                    else:
                        map_info[i] = data.get_text()
                else:
                    map_info[i] = ''

    links = []

    data = soup.find('div', class_='ppr_rup ppr_priv_resp_hr_atf_content').find_all('div', class_='bxLAc GA')

    for z in data:
        d = z.find_all('img', class_='bMGfJ _Q t _U s l bnegk')
        if len(d) > 0:
            links.append(d[0].get('src'))

    map_info['Images'] = links

    return map_info


async def main():
    from pprint import pprint

    session = ClientSession(headers={
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0'})
    data = await extract_stay_data(
        'https://www.tripadvisor.com/Hotel_Review-g293925-d8142973-Reviews-Hotel_des_Arts_Saigon_MGallery-Ho_Chi_Minh_City.html',
        session)
    pprint(data)
    await session.close()


if __name__ == '__main__':
    asyncio.run(main())
