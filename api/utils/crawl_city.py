from bs4 import BeautifulSoup
import json
import sys

from crawl_attractions import extract_all_attractions
from crawl_restaurants import extract_top_restaurant
from crawl_stays import get_stay_city
from utils import fetch_html, BASE_URL


async def extract_amenities(city_path: str):
    """Extract attractions, restaurants, and hotels of a city, given a city's path."""
    return {
        "attractions": await extract_all_attractions(
            BASE_URL + city_path.replace("Tourism", "Attractions")
        ),
        "restaurants": await extract_top_restaurant(
            BASE_URL + city_path.replace("Tourism", "Restaurants")
        ),
        "stays": await get_stay_city(BASE_URL + city_path.replace("Tourism", "Hotels")),
    }


async def extract_city_data(city_path: str):
    """Extract information of a city, given its path."""
    data = await extract_amenities(city_path)
    html_page = await fetch_html(BASE_URL + city_path)
    soup = BeautifulSoup(html_page, "html.parser")

    data["name"] = (
        soup.find("h1", class_="WlYyy cPsXC MLeMj eKEDF")
        .find("span")
        .find_all("span")[1]
        .text
    )
    print("name city: ", data["name"])
    links = []

    try:
        data_links = soup.find("div", class_="bzEkR _T").find_all(
            "picture", class_="dugSS _R dBRxX"
        )
    except:
        data_links = []

    for dl in data_links:
        links.append(str(dl).split('srcset="')[-1].split(" ")[1][3:])

    try:
        info = soup.find("div", class_="fqCDQ").get_text().strip()
    except:
        info = ""
    if info == None:
        info = ""
    data["images"] = links
    data["info"] = info
    # print(data['name'])
    # print(data)
    return data


if __name__ == "__main__":
    import asyncio
    from pprint import pprint

    if len(sys.argv) > 1 and sys.argv[1] == "--help":
        print("usage: python crawl_city.py <url> <file_save_name>")
        exit(0)

    city_path = "/Tourism-g303946-Vung_Tau_Ba_Ria_Vung_Tau_Province-Vacations.html"
    if len(sys.argv) > 1:
        s = sys.argv[1]
        if s.find(BASE_URL) == 0:
            city_path = sys.argv[1].replace(BASE_URL, "")
            print(city_path)
        else:
            print("Not valid url")
            exit(0)

    data = asyncio.run(extract_city_data(city_path))
    pprint(data)

    if len(sys.argv) > 2:
        with open(sys.argv[2], "w") as fp:
            json.dump(data, fp)
