def convert_address_to_link_gg_map(address):
    if address == None or address == '':
        return ''
    link = 'https://maps.google.com/maps?saddr=&daddr='
    link += address.replace(' ', '+').replace(',', '%2C')
    return link
