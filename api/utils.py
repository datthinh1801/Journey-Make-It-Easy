import asyncio

from aiohttp import ClientSession
from pymongo import MongoClient

from utils.crawl_do import extract_attractions

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0'}

URL = 'https://www.tripadvisor.com/Attraction_Review-g303946-d12374392-Reviews-GreenlinesDP_Fast_Ferry-Vung_Tau_Ba_Ria_Vung_Tau_Province.html'


def get_database():
    connection_string = 'mongodb://127.0.0.1:27017/'
    client = MongoClient(connection_string)
    return client['journey']


async def insert_attraction_collection(url: str, session: ClientSession):
    db = get_database()
    collection = db['api_attraction']

    inserted_attraction = await extract_attractions(url, session)
    collection.insert_one(inserted_attraction)


async def main(url):
    session = ClientSession(headers=HEADERS)
    await insert_attraction_collection(url, session)
    await session.close()


if __name__ == '__main__':
    asyncio.run(main(URL))
    # https://www.mongodb.com/languages/python
    print(get_database()['api_attraction'].find())
