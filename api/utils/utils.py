from aiohttp import ClientSession


async def fetch_html(url: str, session: ClientSession):
    """Asynchronously fetch an HTML page of a given URL."""
    resp = await session.get(url=url)
    text = await resp.text()
    return text
