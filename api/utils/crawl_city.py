from bs4 import BeautifulSoup

from crawl_attractions import extract_all_attractions
from crawl_restaurants import extract_top_restaurant
from utils import fetch_html, BASE_URL


async def extract_amenities(city_path: str):
    """Extract attractions, restaurants, and hotels of a city, given a city's path."""
    return {
        'attractions': await extract_all_attractions(
            BASE_URL + city_path.replace('Tourism', 'Attractions')),
        'restaurants': await extract_top_restaurant(
            BASE_URL + city_path.replace('Tourism', 'Restaurants')),
        # TODO: extract hotels
    }


async def extract_city_data(city_path: str):
    """Extract information of a city, given its path."""
    data = await extract_amenities(city_path)
    html_page = await fetch_html(BASE_URL + city_path)
    soup = BeautifulSoup(html_page, 'html.parser')

    data['name'] = soup.find('h1', class_='WlYyy cPsXC MLeMj eKEDF').find('span').find_all('span')[1].text
    return data


if __name__ == '__main__':
    import asyncio
    from pprint import pprint

    city_path = '/Tourism-g303946-Vung_Tau_Ba_Ria_Vung_Tau_Province-Vacations.html'
    pprint(asyncio.run(extract_city_data(city_path)))
