import asyncio
import base64

from bs4 import BeautifulSoup

# change this to .utils if use python shell
from utils import fetch_html, BASE_URL
from convert_address_to_ggmap_links import convert_address_to_link_gg_map


async def extract_restaurant_data(url: str):
    """Extract information of a restaurant, given its full URL."""
    html_page = await fetch_html(url)
    soup = BeautifulSoup(html_page, "html.parser")

    map_class_info = {
        "address": "fhGHT",
        "phone": "iPqaD _F G- ddFHE eKwUx",
        "website": "dOGcA Ci Wc _S C fhGHT",
        "open_time": "dauAM",
    }
    selects = soup.find_all("div", class_="eSAOV H3")

    data = {}
    for info in map_class_info:
        tag = "a"
        if info == "open_time":
            tag = "div"
        try:
            data[info] = selects[1].find(tag, class_=map_class_info[info])
        except:
            data[info] = None
        if data[info] is not None:
            if info == "website":
                # decode base64 and strip
                data[info] = base64.b64decode(
                    data[info].get("data-encoded-url")
                ).decode()[4:-4]
            else:
                data[info] = data.get(info).get_text().replace("\xa0", " ")
                if info == "open_time":
                    time = data[info][len(" Open now: ") :]
                    if len(time) > 20:
                        data[info] = (
                            time[0 : len(time) // 2] + " / " + time[len(time) // 2 :]
                        )
                    else:
                        data[info] = time
                        if "See all hours" in time:
                            data[info] = ""
                if info == "address":
                    data["ggmap"] = convert_address_to_link_gg_map(data[info])
        if data[info] == None:
            data[info] = ""

    details = {}
    # Check layout 1

    layout_select = soup.find("div", class_="eojKU R2 H h")

    tag = {"name": "csKes Wf b", "content": "bYIkW"}

    if layout_select is None:
        layout_select = soup.find("div", class_="fbAWK")
        tag = {"name": "dMshX b", "content": "cfvAV"}

    if layout_select is not None:
        names = layout_select.find_all("div", class_=tag["name"])
        contents = layout_select.find_all("div", class_=tag["content"])
        for i in range(len(names)):
            name = names[i].get_text().strip().lower().replace(" ", "_")
            details[name] = contents[i].get_text().strip()

    data["details"] = details

    data["name"] = soup.find("h1", class_="fHibz").text
    # try:
    #     data['name'] = soup.find('h1', class_='fHibz').text
    # except :
    #     print('restaurant exception: ', url)

    if data["website"] == None:
        data["website"] = ""
    if data["open_time"] == None:
        data["open_time"] = ""
    if data["phone"] == None:
        data["phone"] = ""

    try:
        data_link_img = soup.find("div", class_="mosaic_photos").find_all(
            "img", class_="basicImg"
        )
    except:
        data_link_img = None
    links_image = []
    for d in data_link_img:
        link = d["data-lazyurl"]
        if link.find("photo-s") != -1:
            link = link.replace("photo-s", "photo-o")
        if link.find("photo-l") != -1:
            link = link.replace("photo-o", "photo-o")
        if link.find("photo-f") != -1:
            link = link.replace("photo-f", "photo-o")
        links_image.append(link)
    data["images"] = links_image
    return data


async def extract_link_top_restaurant(url: str):
    """Extract top restaurants from the Restaurants page of a destination."""
    html_page = await fetch_html(url)
    soup = BeautifulSoup(html_page, "html.parser")
    map_class_links = {"link": "bHGqj Cj b"}

    try:
        select_links = soup.find("div", class_="deQwQ").find_all(
            "a", class_=map_class_links["link"]
        )
    except:
        select_links = []

    links = []
    for link in select_links:
        links.append(link.get("href"))
    return links


async def extract_top_restaurant(url: str):
    """Extract information of top restaurants of a destination, given the destination's full URL."""
    links_restaurant = await extract_link_top_restaurant(url)

    tasks = []
    for link in links_restaurant:
        try:
            tasks.append(asyncio.create_task(extract_restaurant_data(BASE_URL + link)))
        except:
            pass

    return await asyncio.gather(*tasks)


if __name__ == "__main__":
    import json

    url = "https://www.tripadvisor.com/Restaurants-g303946-Vung_Tau_Ba_Ria_Vung_Tau_Province.html"
    print(json.dumps(asyncio.run(extract_top_restaurant(url))))
