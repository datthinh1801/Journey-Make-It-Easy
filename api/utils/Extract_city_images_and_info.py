from bs4 import BeautifulSoup
import json
import requests

url = "https://www.tripadvisor.com/Attraction_Review-g293925-d454974-Reviews-Saigon_Opera_House_Ho_Chi_Minh_Municipal_Theater-Ho_Chi_Minh_City.html"


headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0"
}
r = requests.get(url, headers=headers)

print("done request")


soup = BeautifulSoup(r.content, "html.parser")
data_address = soup.find("section", class_="bQUJb")
data_address = str(data_address)
start_index = data_address.find('"address":')
end_index = data_address[start_index:].find("},") + 1

address_json = json.loads(data_address[start_index + 10 : start_index + end_index])

address = (
    address_json["streetAddress"]
    + ", "
    + address_json["addressLocality"]
    + " "
    + address_json["postalCode"]
    + " "
    + address_json["addressCountry"]
)

print(address)

# print(soup.find('div', class_='bzEkR _T'))

# links = []
# for dl in data_links:
#     links.append(str(dl).split('srcset="')[-1].split(' ')[1][3:])
# print(links)

# info = soup.find(
#     'div', class_='fqCDQ').get_text().strip()
# print(info)
# links = []
# for link in data_link:
#     l_image = link.get('style')[len('background-image:url('):-1]
#     if 'photo-l' in l_image:
#         links.append(l_image)

# print(links)

# print(len(links))
