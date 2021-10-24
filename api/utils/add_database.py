import psycopg2
import json
import sys

def add_city(data, nation_id, cursor):
   #add city
   query_str = "INSERT INTO api_city (name, number_voting, rating_score, nation_id) VALUES (%s, %s, %s, %s)"
   item_insert = (data['name'], 0, 0, nation_id)
   cursor.execute(query_str, item_insert)

   #select city_id
   query_str = "SELECT max(id) FROM api_city"
   cursor.execute(query_str)
   city_id = cursor.fetchall()[0][0]

   #add attractions
   for item in data['attractions']:
      query_str = "INSERT INTO api_attraction (name, about, address, admission_ticket, open_time, suggested_duration, number_voting, rating_score, city_id) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)"
      item_insert = (item['name'], item['about'], item['address'], item['admission_ticket'], item['open_time'], item['suggested_duration'], 0, 0, city_id)
      cursor.execute(query_str, item_insert)
      query_str = "SELECT max(id) FROM api_attraction"
      cursor.execute(query_str)
      item_id = cursor.fetchall()[0][0]
      query_str = "INSERT INTO api_attraction_image (link, item_id) VALUES (%s, %s)"
      for link in item['images']:
         item_insert = (link, item_id)
         cursor.execute(query_str, item_insert)

   #add restaurants
   for item in data['restaurants']:
      query_str = "INSERT INTO api_restaurant (name, address, open_time, phone, cuisines, meals, special_diets, price_range, features, website, number_voting, rating_score, city_id) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
      details = item['details']
      cuisines, meals, special_diets, price_range, features = '', '', '', '', ''
      if 'cuisines' in details.keys():
         cuisines = details['cuisines']
      if 'meals' in details.keys():
         meals = details['meals']
      if 'special_diets' in details.keys():
         special_diets = details['special_diets']
      if 'price_range' in details.keys():
         price_range = details['price_range']
      if 'features' in details.keys():
         features = details['features']
      item_insert = (item['name'], item['address'], item['open_time'], item['phone'], cuisines, meals, special_diets, price_range, features,
                     item['website'], 0, 0, city_id)
      cursor.execute(query_str, item_insert)

      query_str = "SELECT max(id) FROM api_restaurant"
      cursor.execute(query_str)
      item_id = cursor.fetchall()[0][0]
      query_str = "INSERT INTO api_restaurant_image (link, item_id) VALUES (%s, %s)"
      for link in item['images']:
         item_insert = (link, item_id)
         cursor.execute(query_str, item_insert)


   # add stays
   for item in data['stays']:
      query_str = "INSERT INTO api_stay (name, about, address, phone, email, room_features, room_types, property_amenities, number_voting, rating_score, city_id) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
      amenities = item['amenities']
      room_features, room_types, property_amenities = '', '', ''
      if 'room_features' in amenities.keys():
         room_features = ', '.join(amenities['room_features'])
      if 'room_types' in amenities.keys():
         room_types = ', '.join(amenities['room_types'])
      if 'property_amenities' in amenities.keys():
         property_amenities = ', '.join(amenities['property_amenities'])
      item_insert = (item['name'], item['about'], item['address'], item['phone'], item['email'],
                     room_features, room_types, property_amenities, 0, 0, city_id)
      cursor.execute(query_str, item_insert)
      query_str = "SELECT max(id) FROM api_stay"
      cursor.execute(query_str)
      item_id = cursor.fetchall()[0][0]
      query_str = "INSERT INTO api_stay_image (link, item_id) VALUES (%s, %s)"
      for link in item['images']:
         item_insert = (link, item_id)
         cursor.execute(query_str, item_insert)


def add_nation(data, cursor):
   #add nation
   query_str = "INSERT INTO api_nation (name, number_voting, rating_score) VALUES (%s, %s, %s)"
   item_insert = (data['name'], 0, 0)
   cursor.execute(query_str, item_insert)

   #get nation_id
   query_str = "SELECT max(id) FROM api_nation"
   cursor.execute(query_str)
   nation_id = cursor.fetchall()[0][0]

   for i in data['citys']:
      add_city(i, nation_id, cursor)


def setup(data):
   # Establishing the connection
   conn = psycopg2.connect(
      database='Journey-Make-It-Easy', user='postgres', password='1234', host='127.0.0.1', port='10000'
   )

   # Setting auto commit false
   conn.autocommit = True

   # Creating a cursor object using the cursor() method
   cursor = conn.cursor()

   """Call function here"""
   add_nation(data, cursor)

   # Commit your changes in the database
   conn.commit()

   # Closing the connection
   cursor.close()
   conn.close()


if __name__ == '__main__':
   if len(sys.argv) < 2 or sys.argv[1] == '--help':
      print('Usage: python add_database.py <json_file_name>')
      exit(0)

   with open(sys.argv[1]) as f:
      try:
         data = json.load(f)
         setup(data)
      except:
         print('Cannot open file json')
