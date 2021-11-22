from .code.jouney_make_it_easy_recomendation_system import *

from background_task import background
from background_task.models import Task
from random import randrange
import time
import _thread

c = randrange(1000)

def update(delay):
    global c
    while True:
        time.sleep(delay)
        c = randrange(1000)
        print(c)

# Auto update after 1 day
try:
   _thread.start_new_thread( update, (20, ) )
except:
   print("Error: unable to start thread")

def test(z):
    return z + c

def test2(z):
    return z + c + 1

'''
attractionRCS = create_model()

def getAttraction(id):
    return user_recommendations(attractionRCS, id, measure=DOT, exclude_rated=True, k=5)

# Background task
@background(schedule=today_midnight)
def update():
    attractionRCS = create_model()

# Auto update after 1 day
update(repeat=Task.DAILY)
'''
