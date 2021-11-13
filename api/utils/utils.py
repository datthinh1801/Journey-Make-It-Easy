from aiohttp import ClientSession

BASE_URL = "https://www.tripadvisor.com"


async def fetch_html(url: str):
    """Asynchronously fetch an HTML page of a given URL."""
    async with ClientSession(
        headers={
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0"
        }
    ) as session:
        resp = await session.get(url=url)
        text = await resp.text()
    return text
