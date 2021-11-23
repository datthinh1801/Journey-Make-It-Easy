from django.db import models
from django.contrib.auth.models import User
from api.models import *


class AttractionQuery(models.Model):
    user = models.ForeignKey(
        User, related_name="attraction_recommends", on_delete=models.CASCADE, null=True
    )
    time = models.DateTimeField()

class AttractionReturn(models.Model):
    query = models.ForeignKey(
        AttractionQuery, related_name="items", on_delete=models.CASCADE
    )
    item = models.ForeignKey(
        Attraction, on_delete=models.CASCADE
    )
    point = models.FloatField(default=0)

class RestaurantQuery(models.Model):
    user = models.ForeignKey(
        User, related_name="restaurant_recommends", on_delete=models.CASCADE, null=True
    )
    time = models.DateTimeField()

class RestaurantReturn(models.Model):
    query = models.ForeignKey(
        RestaurantQuery, related_name="items", on_delete=models.CASCADE
    )
    item = models.ForeignKey(
        Restaurant, on_delete=models.CASCADE
    )
    point = models.FloatField(default=0)

class StayQuery(models.Model):
    user = models.ForeignKey(
        User, related_name="stay_recommends", on_delete=models.CASCADE, null=True
    )
    time = models.DateTimeField()

class StayReturn(models.Model):
    query = models.ForeignKey(
        StayQuery, related_name="items", on_delete=models.CASCADE
    )
    item = models.ForeignKey(
        Stay, on_delete=models.CASCADE
    )
    point = models.FloatField(default=0)
