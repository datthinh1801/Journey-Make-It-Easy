import asyncio
from bs4 import BeautifulSoup

from utils import fetch_html
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
    links = {}
    for i in range(10):
        links[city_name[i].get_text()] = select_city_links[i].get('href')

    return links


async def extract_nation_data(nation_url: str):
    """Extract data of a nation, given its full URL."""
    data = {}
    city_links = await extract_links_of_cities(nation_url)
    for city_name in city_links:
        data[city_name] = await extract_city_data(city_links[city_name])
    return data


if __name__ == '__main__':
    from pprint import pprint

    url = 'https://www.tripadvisor.com/Tourism-g293921-Vietnam-Vacations.html'
