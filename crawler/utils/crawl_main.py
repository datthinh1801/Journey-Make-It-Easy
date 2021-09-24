import asyncio
from bs4 import BeautifulSoup
from aiohttp import ClientSession

from crawl_do import extract_full_site_of_city
from crawl_eat import extract_top_restaurant
from utils import fetch_html


async def extract_link_city_of_country(url: str, session: ClientSession):
    html_page = await fetch_html(url, session)
    soup = BeautifulSoup(html_page, 'html.parser')

    select_city_links = soup.find('div', class_='dWGoN f e o').find_all(
        'a', 'iPqaD _F G- ddFHE eKwUx ecmMI')

    city_name = soup.find('div', class_='dWGoN f e o').find_all(
        'div', 'WlYyy ozGOB biNiR bcGLA dpKLb ctOoe cWWWn ftRXo eiJVU')

    # get 10 travel site
    links = {}
    for i in range(10):
        links[city_name[i].get_text()] = select_city_links[i].get('href')

    return links


# URL = 'https://www.tripadvisor.com/Tourism-g293915-Thailand-Vacations.html'
URL = 'https://www.tripadvisor.com/Tourism-g293921-Vietnam-Vacations.html'
data_vn = {}

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0'}


async def main():
    session = ClientSession(headers=HEADERS)
    city_links = await extract_link_city_of_country(URL, session)

    for city in city_links:
        print('Extract ', city)
        # Extract do
        # /Attractions
        nation_data = {
            'do': await extract_full_site_of_city(
                'https://www.tripadvisor.com' + '/Attractions' + (city_links[city])[len('/Tourism'):], session),
            'eat': await extract_top_restaurant(
                'https://www.tripadvisor.com' + '/Restaurants' + (city_links[city])[len('/Tourism'):], session)
        }
        print(nation_data)
        # Extract Stay
        # /Hotels

        # Extract Eat
        # /Restaurants
        data_vn[city] = nation_data
        break
    await session.close()


if __name__ == '__main__':
    asyncio.run(main())
    print(data_vn)
