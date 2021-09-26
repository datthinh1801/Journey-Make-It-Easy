from aiohttp import ClientSession


async def fetch_html(url: str):
    """Asynchronously fetch an HTML page of a given URL."""
    async with ClientSession(headers={
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0'}) as session:
        resp = await session.get(url=url)
        text = await resp.text()
    return text
