from django.db import models
from django.contrib.auth.models import User
from api.models import *


class AttractionQuery(models.Model):
    user = models.ForeignKey(
        User, related_name="attraction_recommends", on_delete=models.CASCADE
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
