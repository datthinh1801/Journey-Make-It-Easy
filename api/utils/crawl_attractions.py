import asyncio
from bs4 import BeautifulSoup
import json

# change this to .utils if use python shell
from utils import fetch_html, BASE_URL
from convert_address_to_ggmap_links import convert_address_to_link_gg_map


async def extract_attraction_data(url: str):
    """Extract information of an attraction, given its full URL."""
    html_page = await fetch_html(url)
    soup = BeautifulSoup(html_page, "html.parser")

    map_class_for_open_time = {"open_time": "bHGlw"}

    map_class_to_data = {
        "about": "WlYyy diXIH dDKKM",
        "suggested_duration": "cYygO _c",
        "admission_ticket": "WlYyy cPsXC cMKSg",
        "images": "eMVst _R w h GA",
    }
    map_info = {}
    for i in map_class_to_data:
        if i != "images":
            data = soup.find("div", class_="fNXCm A").find(
                "div", class_=map_class_to_data[i]
            )
            if data is not None:
                map_info[i] = data.get_text().strip()
            else:
                map_info[i] = ""
        else:
            data = soup.find("div", class_="fNXCm A").find_all(
                "div", class_=map_class_to_data[i]
            )
            links = []
            for link in data:
                l_image = link.get("style")[len("background-image:url(") : -1]

                # photo-l is small images, change to photo-o to get full size images
                if "photo-l" in l_image:
                    links.append(l_image.replace("photo-l", "photo-o"))
            map_info[i] = links

    # In case address not found
    try:
        data_address = soup.find("section", class_="bQUJb")
        data_address = str(data_address)
        start_index = data_address.find('"address":')
        end_index = data_address[start_index:].find("},") + 1

        address_json = json.loads(
            data_address[start_index + 10 : start_index + end_index]
        )

        address = (
            address_json["streetAddress"]
            + ", "
            + address_json["addressLocality"]
            + " "
            + address_json["postalCode"]
            + " "
            + address_json["addressCountry"]
        )

    except:
        # print(url)
        address = ""

    map_info["address"] = address
    map_info["ggmap"] = convert_address_to_link_gg_map(map_info["address"])

    # In case open time not found
    try:
        data = soup.find("div", class_="WlYyy diXIH dTqpp").find(
            "span", class_=map_class_for_open_time["open_time"]
        )
    except:
        data = None
    if data is not None:
        map_info["open_time"] = data.get_text().strip()
    else:
        map_info["open_time"] = ""

    map_info["name"] = soup.find("h1", class_="WlYyy cPsXC GeSzT").text

    return map_info


async def extract_all_attractions(url: str):
    """Extract all attractions of a city, given its URL."""
    html_page = await fetch_html(url)
    soup = BeautifulSoup(html_page, "html.parser")

    select_top_attractions = soup.find_all(
        "div", class_="fVbwn cdAAV cagLQ eZTON dofsx"
    )

    relative_urls_site = []
    for select in select_top_attractions:
        data_link = select.find("a")
        if data_link is not None:
            relative_urls_site.append(data_link.get("href"))

    tasks = []
    for site in relative_urls_site:
        tasks.append(asyncio.create_task(extract_attraction_data(BASE_URL + site)))
    return await asyncio.gather(*tasks)


if __name__ == "__main__":
    import json

    url = "https://www.tripadvisor.com/Attractions-g293925-Activities-Ho_Chi_Minh_City.html"
    print(json.dumps(asyncio.run(extract_all_attractions(url))))
