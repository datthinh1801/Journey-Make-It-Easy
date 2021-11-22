from .code.jouney_make_it_easy_recomendation_system import *
from .models import *
from api.models import *

from django.contrib.auth.models import User
from background_task import background
from background_task.models import Task
from random import randrange
import time
import _thread
from django.utils import timezone

attractionRCS = create_model()

def update(delay):
    global attractionRCS
    while True:
        time.sleep(delay)
        attractionRCS = create_model()
        print("Retrain Model Successfully")

# Auto update after 1 day
try:
   _thread.start_new_thread( update, (30 * 60 * 60, ) )
except:
   print("Error: Unable to start thread")

def RCSAttraction(id):
    a, b = user_recommendations(attractionRCS, id, measure=DOT, exclude_rated=True, k=5)
    print(a)
    print(b)
    user = User.objects.filter(id=id)
    if user:
        user = user[0]
    query = AttractionQuery()
    query.user = user
    query.time = timezone.now()
    query.save()
    for i in range(5):
        item = AttractionReturn()
        item.query = query
        item.point = b[i]
        item.item = Attraction.objects.get(id=a[i])
        item.save()
    return a
