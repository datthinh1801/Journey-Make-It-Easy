from bs4 import BeautifulSoup
import asyncio
import base64
import json
from utils import fetch_html, BASE_URL
from convert_address_to_ggmap_links import convert_address_to_link_gg_map


async def extract_stay_data(url: str):
    html_page = await fetch_html(url)

    soup = BeautifulSoup(html_page, "html.parser")

    map_class_for_address = {
        "Parrent_div": "ui_container is-fluid page-section accessible_red_3",
        "name": ["h1", "fkWsC b d Pn"],
        "address": ["span", "ceIOZ yYjkv"],
    }

    map_class_for_contact = {
        "Parrent_div": "TDJYF F1",
        "phone": ["a", "bIWzQ"],
        "email": ["a", "bIWzQ fWKZw"],
    }

    map_class_about = {
        "Parrent_div": "eZQpm _T Z BB",
        "about": ["div", "pIRBV _T"],
        "feature": ["div", "ssr-init-26f"],
    }

    final_map = [map_class_for_address, map_class_for_contact, map_class_about]

    links = []

    map_info = {}
    for map_data in final_map:
        for i in map_data:
            data = None
            if i != "Parrent_div":
                data = None
                try:
                    data = soup.find("div", class_=map_data["Parrent_div"]).find(
                        map_data[i][0], class_=map_data[i][1]
                    )
                except:
                    data = None
                if data != None:
                    if i == "email":
                        map_info[i] = data["href"].replace("mailto:", "")
                    elif i == "feature":
                        data = soup.find(
                            "div", class_=map_data["Parrent_div"]
                        ).find_all(map_data[i][0], class_=map_data[i][1])

                        try:
                            images = data[2].get("data-ssrev-handlers")

                            i = images.find('"url":"')
                            while i != -1:
                                images = images[i + 7 :]
                                j = images.find('"')
                                link = images[:j]
                                if ("photo-o" in link) and ("dynamic" not in link):
                                    z = link.find("?")
                                    if z != -1:
                                        link = link[:z]
                                    if link.find("photo-s") != -1:
                                        link = link.replace("photo-s", "photo-o")
                                    if link.find("photo-l") != -1:
                                        link = link.replace("photo-o", "photo-o")
                                    if link.find("photo-f") != -1:
                                        link = link.replace("photo-f", "photo-o")
                                    links.append(link)
                                images = images[j + 1 :]
                                i = images.find('"url":"')
                        except:
                            pass

                        try:
                            data = json.loads(data[3].get("data-ssrev-handlers"))
                            amenities_tag = data["load"][3]["amenities"][
                                "highlightedAmenities"
                            ]
                            amenities = {}
                            tag = []
                            for i in amenities_tag["roomFeatures"]:
                                tag.append(i["amenityNameLocalized"])
                            amenities["room_features"] = tag
                            tag = []
                            for i in amenities_tag["roomTypes"]:
                                tag.append(i["amenityNameLocalized"])
                            amenities["room_types"] = tag
                            tag = []
                            for i in amenities_tag["propertyAmenities"]:
                                tag.append(i["amenityNameLocalized"])
                            amenities["property_amenities"] = tag

                            map_info["amenities"] = amenities
                        except:
                            map_info["amenities"] = {
                                "room_features": [],
                                "room_types": [],
                                "property_amenities": [],
                            }

                    else:
                        map_info[i] = data.get_text()
                    if i == "address":
                        map_info["ggmap"] = convert_address_to_link_gg_map(map_info[i])
                else:
                    map_info[i] = ""

    data = soup.find_all("div", class_="cDjAR")

    for z in data:
        d = z.find_all("img", class_="bMGfJ _Q t _U s l bnegk")
        if len(d) > 0:
            link = d[0].get("src")
            print(link)
            z = link.find("?")
            if z != -1:
                link = link[:z]
                link = link.replace("dynamic-", "")
            if link.find("photo-s") != -1:
                link = link.replace("photo-s", "photo-o")
            if link.find("photo-l") != -1:
                link = link.replace("photo-o", "photo-o")
            if link.find("photo-f") != -1:
                link = link.replace("photo-f", "photo-o")
            links.append(link)

    map_info["images"] = links
    return map_info


async def get_stay_city(url: str):
    html_page = await fetch_html(url)

    soup = BeautifulSoup(html_page, "html.parser")

    map_data = []

    data = soup.find_all("div", class_="listing_title")
    for z in data:
        f = z.find("a")
        if f != None:
            try:
                map_data.append(
                    asyncio.create_task(extract_stay_data(BASE_URL + f.get("href")))
                )
            except:
                pass

    return await asyncio.gather(*map_data)


if __name__ == "__main__":
    from pprint import pprint

    url = "https://www.tripadvisor.com/Hotels-g293925-Ho_Chi_Minh_City-Hotels.html"
    pprint(asyncio.run(get_stay_city(url)))
