from django.db import models
from django.contrib.auth.models import User


class Nation(models.Model):
    name = models.TextField()
    number_voting = models.TextField(default=0)
    rating_score = models.FloatField(default=0)


class City(models.Model):
    name = models.TextField()
    number_voting = models.TextField(default=0)
    rating_score = models.FloatField(default=0)
    nation = models.ForeignKey(Nation, related_name="citys", on_delete=models.CASCADE)


class Attraction(models.Model):
    name = models.CharField(max_length=100)
    about = models.TextField()
    address = models.TextField()
    admission_ticket = models.TextField(blank=True)
    open_time = models.TextField(blank=True)
    suggested_duration = models.TextField(blank=True)
    number_voting = models.TextField(default=0)
    rating_score = models.FloatField(default=0)
    city = models.ForeignKey(City, related_name="attractions", on_delete=models.CASCADE)


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
    number_voting = models.TextField(default=0)
    rating_score = models.FloatField(default=0)
    city = models.ForeignKey(City, related_name="restaurants", on_delete=models.CASCADE)


class Stay(models.Model):
    name = models.CharField(max_length=100)
    about = models.TextField()
    address = models.TextField()
    phone = models.TextField()
    email = models.TextField()
    room_features = models.TextField()
    room_types = models.TextField()
    property_amenities = models.TextField()
    number_voting = models.TextField(default=0)
    rating_score = models.FloatField(default=0)
    city = models.ForeignKey(City, related_name="stays", on_delete=models.CASCADE)


class Nation_Image(models.Model):
    link = models.TextField()
    item = models.ForeignKey(Nation, related_name="images", on_delete=models.CASCADE)


class Nation_Voting(models.Model):
    item_vote = models.ForeignKey(Nation, related_name="votings", on_delete=models.CASCADE)
    point = models.IntegerField()
    user = models.ForeignKey(User, related_name="nation_votings", on_delete=models.CASCADE)


class City_Image(models.Model):
    link = models.TextField()
    item = models.ForeignKey(City, related_name="images", on_delete=models.CASCADE)


class City_Voting(models.Model):
    item_vote = models.ForeignKey(City, related_name="votings", on_delete=models.CASCADE)
    point = models.IntegerField()
    user = models.ForeignKey(User, related_name="city_votings", on_delete=models.CASCADE)


class Attraction_Image(models.Model):
    link = models.TextField()
    item = models.ForeignKey(Attraction, related_name="images", on_delete=models.CASCADE)


class Attraction_Voting(models.Model):
    item_vote = models.ForeignKey(Attraction, related_name="votings", on_delete=models.CASCADE)
    point = models.IntegerField()
    user = models.ForeignKey(User, related_name="attraction_votings", on_delete=models.CASCADE)


class Restaurant_Image(models.Model):
    link = models.TextField()
    item = models.ForeignKey(Restaurant, related_name="images", on_delete=models.CASCADE)


class Restaurant_Voting(models.Model):
    item_vote = models.ForeignKey(Restaurant, related_name="votings", on_delete=models.CASCADE)
    point = models.IntegerField()
    user = models.ForeignKey(User, related_name="restaurant_votings", on_delete=models.CASCADE)


class Stay_Image(models.Model):
    link = models.TextField()
    item = models.ForeignKey(Stay, related_name="images", on_delete=models.CASCADE)


class Stay_Voting(models.Model):
    item_vote = models.ForeignKey(Stay, related_name="votings", on_delete=models.CASCADE)
    point = models.IntegerField()
    user = models.ForeignKey(User, related_name="stay_votings", on_delete=models.CASCADE)
