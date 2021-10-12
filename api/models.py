from django.db import models
from django.contrib.auth.models import User


class Nation(models.Model):
    name = models.TextField()
    number_voting = models.TextField()
    rating_score = models.FloatField()


class City(models.Model):
    name = models.TextField()
    number_voting = models.TextField()
    rating_score = models.FloatField()
    nation = models.ForeignKey(Nation, on_delete=models.CASCADE)


class Attraction(models.Model):
    name = models.CharField(max_length=100)
    about = models.TextField()
    address = models.TextField()
    admission_ticket = models.TextField(blank=True)
    open_time = models.TextField(blank=True)
    suggested_duration = models.TextField(blank=True)
    number_voting = models.TextField()
    rating_score = models.FloatField()
    city = models.ForeignKey(City, on_delete=models.CASCADE)


class Restaurant(models.Model):
    name = models.CharField(max_length=100)
    address = models.TextField()
    open_time = models.TextField()
    phone = models.TextField()
    website = models.TextField()
    cuisines = models.TextField()
    meals = models.TextField()
    special_diets = models.TextField()
    price_range = models.TextField()
    features = models.TextField()
    number_voting = models.TextField()
    rating_score = models.FloatField()
    city = models.ForeignKey(City, on_delete=models.CASCADE)


class Stay(models.Model):
    name = models.CharField(max_length=100)
    about = models.TextField()
    address = models.TextField()
    phone = models.TextField()
    email = models.TextField()
    room_features = models.TextField()
    room_types = models.TextField()
    property_amenities = models.TextField()
    number_voting = models.TextField()
    rating_score = models.FloatField()
    city = models.ForeignKey(City, on_delete=models.CASCADE)


class Nation_Image(models.Model):
    link = models.TextField()
    item = models.ForeignKey(Nation, on_delete=models.CASCADE)


class Nation_Voting(models.Model):
    item_vote = models.ForeignKey(Nation, on_delete=models.CASCADE)
    point = models.IntegerField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)


class City_Image(models.Model):
    link = models.TextField()
    item = models.ForeignKey(City, on_delete=models.CASCADE)


class City_Voting(models.Model):
    item_vote = models.ForeignKey(City, on_delete=models.CASCADE)
    point = models.IntegerField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)

class Attraction_Image(models.Model):
    link = models.TextField()
    item = models.ForeignKey(Attraction, on_delete=models.CASCADE)


class Attraction_Voting(models.Model):
    item_vote = models.ForeignKey(Attraction, on_delete=models.CASCADE)
    point = models.IntegerField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)

class Restaurant_Image(models.Model):
    link = models.TextField()
    item = models.ForeignKey(Restaurant, on_delete=models.CASCADE)


class Restaurant_Voting(models.Model):
    item_vote = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    point = models.IntegerField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)

class Stay_Image(models.Model):
    link = models.TextField()
    item = models.ForeignKey(Stay, on_delete=models.CASCADE)


class Stay_Voting(models.Model):
    item_vote = models.ForeignKey(Stay, on_delete=models.CASCADE)
    point = models.IntegerField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)


