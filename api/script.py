import asyncio

from pymongo import MongoClient

from .models import Attraction
from .utils.crawl_do import extract_attractions


def get_database():
    connection_string = 'mongodb://127.0.0.1:27017/'
    client = MongoClient(connection_string)
    return client['journey']


def main(url):
    data = asyncio.run(extract_attractions(url))
    attraction = Attraction(data)
    attraction.save()


if __name__ == '__main__':
    # consts for later uses
    URL = 'https://www.tripadvisor.com/Attraction_Review-g303946-d12374392-Reviews-GreenlinesDP_Fast_Ferry-Vung_Tau_Ba_Ria_Vung_Tau_Province.html'
    asyncio.run(main(URL))
    # https://www.mongodb.com/languages/python
    print(get_database()['api_attraction'].find())
