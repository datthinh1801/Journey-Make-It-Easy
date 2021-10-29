import asyncio
from bs4 import BeautifulSoup

from utils import fetch_html, BASE_URL
from crawl_city import extract_city_data


async def extract_links_of_cities(nation_url: str):
    """Extract hyperlinks to cities of a country, given the nation's full URL."""
    html_page = await fetch_html(nation_url)
    soup = BeautifulSoup(html_page, 'html.parser')

    select_city_links = soup.find('div', class_='dWGoN f e o').find_all(
        'a', 'iPqaD _F G- ddFHE eKwUx ecmMI')

    city_name = soup.find('div', class_='dWGoN f e o').find_all(
        'div', 'WlYyy ozGOB biNiR bcGLA dpKLb ctOoe cWWWn ftRXo eiJVU')

    # get the first 10 travel sites
    links = []
    for i in range(min(10, len(city_name))):
        links.append(select_city_links[i].get('href'))

    nation_name = ''
    if len(city_name) > 0:
        nation_name = city_name[i].get_text().split(', ')[1]

    return [links, nation_name]


async def extract_nation_data(nation_url: str):
    """Extract data of a nation, given its full URL."""
    city_links, nation_name = await extract_links_of_cities(nation_url)
    data = {}
    citys = []
    print(len(city_links))
    count = 5
    for city_link in city_links:
        citys.append(asyncio.create_task(extract_city_data(city_link)))
        count -= 1
        if count == 0:
            break

    data['name'] = nation_name
    data['citys'] = await asyncio.gather(*citys)
    return data


if __name__ == '__main__':
    from pprint import pprint
    import sys

    if len(sys.argv) > 1 and sys.argv[1] == '--help':
        print('usage: python crawl_nation.py <url> <file_save_name>')
        exit(0)

    url = 'https://www.tripadvisor.com/Tourism-g293921-Vietnam-Vacations.html'
    # if len(sys.argv) > 1:
    #     s = sys.argv[1]
    #     if s.find(BASE_URL) == 0:
    #         url = s
    #         print(url)
    #     else:
    #         print('Not valid url')
    #         exit(0)

    data = asyncio.run(extract_nation_data(url))

    if len(sys.argv) >= 0:
        import json

        with open('vietnam_5_city.json', 'w') as fp:
            json.dump(data, fp)
            print('ok')
