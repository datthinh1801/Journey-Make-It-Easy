from .code.jouney_make_it_easy_recomendation_system import *
from .models import *
from api.models import *

from django.contrib.auth.models import User

import time
import _thread
from django.utils import timezone

# Set INIT = 1 to stop start 3 RCS when first run
INIT = 0

if INIT:
    attractionRCS, restaurantRCS, stayRCS = None, None, None
else:
    attractionRCS = create_model("Attraction")
    restaurantRCS = create_model("Restaurant")
    stayRCS = create_model("Stay")

def update(delay):
    global attractionRCS
    global restaurantRCS
    global stayRCS
    while True:
        time.sleep(delay)
        attractionRCS = create_model("Attraction")
        restaurantRCS = create_model("Restaurant")
        stayRCS = create_model("Stay")
        print("Re-train Model Successfully")

# Auto update after 1 day
if not INIT:
    try:
       _thread.start_new_thread(update, (24 * 60 * 60,))
    except:
       print("Error: Unable to start thread")

def RCSAttraction(id):
    if INIT:
        return []
    a, b = user_recommendations(attractionRCS, id, measure=DOT, exclude_rated=True, k=5)
    print('user_id: ' + str(id))
    print('attractions recommend id: ' + str(a))
    print('attractions score: ' + str(b))
    if id == -1:
        user = None
    else:
        user = User.objects.get(id=id)
    query = AttractionQuery()
    query.user = user
    query.time = timezone.now()
    query.save()
    for i in range(5):
        item = AttractionReturn()
        item.query = query
        item.point = b[i]
        tmp = Attraction.objects.get(id=a[i])
        item.item = tmp
        item.save()
    return a

def RCSRestaurant(id):
    if INIT:
        return []
    a, b = user_recommendations(restaurantRCS, id, measure=DOT, exclude_rated=True, k=5)
    print('user_id: ' + str(id))
    print('restaurants recommend id: ' + str(a))
    print('restaurants score: ' + str(b))
    if id == -1:
        user = None
    else:
        user = User.objects.get(id=id)
    query = RestaurantQuery()
    query.user = user
    query.time = timezone.now()
    query.save()
    for i in range(5):
        item = RestaurantReturn()
        item.query = query
        item.point = b[i]
        tmp = Restaurant.objects.get(id=a[i])
        item.item = tmp
        item.save()
    return a

def RCSStay(id):
    if INIT:
        return []
    a, b = user_recommendations(stayRCS, id, measure=DOT, exclude_rated=True, k=5)
    print('user_id: ' + str(id))
    print('stays recommend id: ' + str(a))
    print('stays score: ' + str(b))
    if id == -1:
        user = None
    else:
        user = User.objects.get(id=id)
    query = StayQuery()
    query.user = user
    query.time = timezone.now()
    query.save()
    for i in range(5):
        item = StayReturn()
        item.query = query
        item.point = b[i]
        tmp = Stay.objects.get(id=a[i])
        item.item = tmp
        item.save()
    return a
