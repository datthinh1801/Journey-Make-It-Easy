def convert_address_to_link_gg_map(address):
    if address == None or address == "":
        return ""
    link = "https://maps.google.com/maps?saddr=&daddr="
    link += address.replace(" ", "+").replace(",", "%2C")
    return link


# print(convert_address_to_link_gg_map(
#     '8/15, Le Thanh Ton Street, Ben Nghe Ward. District 1, Ho Chi Minh City Vietnam'))
