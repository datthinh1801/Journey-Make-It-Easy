from .crawl_do import extract_all_attractions
from .crawl_eat import extract_top_restaurant


async def extract_city_data(city_path: str):
    return {
        'do': await extract_all_attractions(
            'https://www.tripadvisor.com' + city_path.replace('Tourism', 'Attractions')),
        'eat': await extract_top_restaurant(
            'https://www.tripadvisor.com' + city_path.replace('Tourism', 'Restaurants')),
        # TODO: extract hotels
    }
