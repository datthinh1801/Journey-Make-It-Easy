from bs4 import BeautifulSoup

import requests

url = "https://www.tripadvisor.com/Attraction_Review-g293925-d454974-Reviews-Saigon_Opera_House_Ho_Chi_Minh_Municipal_Theater-Ho_Chi_Minh_City.html"


headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0"
}
r = requests.get(url, headers=headers)

print("done request")


soup = BeautifulSoup(r.content, "html.parser")

data_link = soup.find("div", class_="fNXCm A").find_all("div", class_="eMVst _R w h GA")

links = []
for link in data_link:
    l_image = link.get("style")[len("background-image:url(") : -1]
    if "photo-l" in l_image:
        links.append(l_image)

print(links)

print(len(links))
