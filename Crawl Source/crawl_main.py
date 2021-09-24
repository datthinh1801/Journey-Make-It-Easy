from bs4 import BeautifulSoup
import requests

from crawl_do import Extract_full_site_of_city
from crawl_eat import Extract_top_restaurant


def Extract_link_city_of_Country(url):
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0'}
    r = requests.get(url, headers=headers)

    soup = BeautifulSoup(r.content, 'html.parser')

    select_city_links = soup.find('div', class_='dWGoN f e o').find_all(
        'a', 'iPqaD _F G- ddFHE eKwUx ecmMI')

    city_name = soup.find('div', class_='dWGoN f e o').find_all(
        'div', 'WlYyy ozGOB biNiR bcGLA dpKLb ctOoe cWWWn ftRXo eiJVU')

    # get 10 travel site
    links = {}
    for i in range(10):

        links[city_name[i].get_text()] = select_city_links[i].get('href')

    return links


url = 'https://www.tripadvisor.com/Tourism-g293915-Thailand-Vacations.html'
url = 'https://www.tripadvisor.com/Tourism-g293921-Vietnam-Vacations.html'


city_links = Extract_link_city_of_Country(url)


data_vn = {}
for city in city_links:
    print('Extract ', city)
    # Extract do
    # /Attractions
    nation_data = {}
    nation_data['do'] = Extract_full_site_of_city(
        'https://www.tripadvisor.com'+'/Attractions'+(city_links[city])[len('/Tourism'):])
    # Extract Stay
    # /Hotels

    # Extract Eat
    # /Restaurants
    nation_data['eat'] = Extract_top_restaurant(
        'https://www.tripadvisor.com'+'/Restaurants'+(city_links[city])[len('/Tourism'):])
    data_vn[city] = nation_data


print(data_vn)
