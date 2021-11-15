from django.db import models
from django.contrib.auth.models import User


class Nation(models.Model):
    name = models.TextField()
    number_voting = models.IntegerField(default=0)
    rating_score = models.FloatField(default=0)


class City(models.Model):
    name = models.TextField()
    info = models.TextField(blank=True)
    number_voting = models.IntegerField(default=0)
    rating_score = models.FloatField(default=0)
    nation = models.ForeignKey(Nation, related_name="cities", on_delete=models.CASCADE)


class Attraction(models.Model):
    name = models.CharField(max_length=100)
    about = models.TextField()
    address = models.TextField()
    admission_ticket = models.TextField(blank=True)
    open_time = models.TextField(blank=True)
    suggested_duration = models.TextField(blank=True)
    ggmap = models.TextField(blank=True)
    number_voting = models.IntegerField(default=0)
    rating_score = models.FloatField(default=0)
    city = models.ForeignKey(City, related_name="attractions", on_delete=models.CASCADE)


class Restaurant(models.Model):
    name = models.CharField(max_length=100)
    address = models.TextField()
    open_time = models.TextField()
    phone = models.TextField()
    website = models.TextField()
    price_range = models.TextField()
    ggmap = models.TextField(blank=True)
    number_voting = models.IntegerField(default=0)
    rating_score = models.FloatField(default=0)
    city = models.ForeignKey(City, related_name="restaurants", on_delete=models.CASCADE)


class Meal(models.Model):
    value = models.TextField()
    restaurant = models.ForeignKey(
        Restaurant, related_name="meals", on_delete=models.CASCADE
    )


class Special_Diet(models.Model):
    value = models.TextField()
    restaurant = models.ForeignKey(
        Restaurant, related_name="special_diets", on_delete=models.CASCADE
    )


class Restaurant_Feature(models.Model):
    value = models.TextField()
    restaurant = models.ForeignKey(
        Restaurant, related_name="features", on_delete=models.CASCADE
    )


class Cuisine(models.Model):
    value = models.TextField()
    restaurant = models.ForeignKey(
        Restaurant, related_name="cuisines", on_delete=models.CASCADE
    )


class Stay(models.Model):
    name = models.CharField(max_length=100)
    about = models.TextField()
    address = models.TextField()
    phone = models.TextField()
    email = models.TextField()
    ggmap = models.TextField(blank=True)
    number_voting = models.IntegerField(default=0)
    rating_score = models.FloatField(default=0)
    city = models.ForeignKey(City, related_name="stays", on_delete=models.CASCADE)


class Room_Feature(models.Model):
    value = models.TextField()
    stay = models.ForeignKey(
        Stay, related_name="room_features", on_delete=models.CASCADE
    )


class Room_Type(models.Model):
    value = models.TextField()
    stay = models.ForeignKey(Stay, related_name="room_types", on_delete=models.CASCADE)


class Property_Amenitie(models.Model):
    value = models.TextField()
    stay = models.ForeignKey(
        Stay, related_name="property_amenities", on_delete=models.CASCADE
    )


# Image
class Nation_Image(models.Model):
    link = models.TextField()
    item = models.ForeignKey(Nation, related_name="images", on_delete=models.CASCADE)


class City_Image(models.Model):
    link = models.TextField()
    item = models.ForeignKey(City, related_name="images", on_delete=models.CASCADE)


class Attraction_Image(models.Model):
    link = models.TextField()
    item = models.ForeignKey(
        Attraction, related_name="images", on_delete=models.CASCADE
    )


class Restaurant_Image(models.Model):
    link = models.TextField()
    item = models.ForeignKey(
        Restaurant, related_name="images", on_delete=models.CASCADE
    )


class Stay_Image(models.Model):
    link = models.TextField()
    item = models.ForeignKey(Stay, related_name="images", on_delete=models.CASCADE)


# Review
class Nation_Review(models.Model):
    item = models.ForeignKey(Nation, related_name="reviews", on_delete=models.CASCADE)
    text = models.TextField()
    point = models.IntegerField(default=0)
    user = models.ForeignKey(
        User, related_name="nation_reviews", on_delete=models.CASCADE
    )


class City_Review(models.Model):
    item = models.ForeignKey(City, related_name="reviews", on_delete=models.CASCADE)
    text = models.TextField()
    point = models.IntegerField(default=0)
    user = models.ForeignKey(
        User, related_name="city_reviews", on_delete=models.CASCADE
    )


class Attraction_Review(models.Model):
    item = models.ForeignKey(
        Attraction, related_name="reviews", on_delete=models.CASCADE
    )
    text = models.TextField()
    point = models.IntegerField(default=0)
    user = models.ForeignKey(
        User, related_name="attraction_reviews", on_delete=models.CASCADE
    )


class Restaurant_Review(models.Model):
    item = models.ForeignKey(
        Restaurant, related_name="reviews", on_delete=models.CASCADE
    )
    text = models.TextField()
    point = models.IntegerField(default=0)
    user = models.ForeignKey(
        User, related_name="restaurant_reviews", on_delete=models.CASCADE
    )


class Stay_Review(models.Model):
    item = models.ForeignKey(Stay, related_name="reviews", on_delete=models.CASCADE)
    text = models.TextField()
    point = models.IntegerField(default=0)
    user = models.ForeignKey(
        User, related_name="stay_reviews", on_delete=models.CASCADE
    )


# Blog
class Blog(models.Model):
    title = models.TextField()
    content = models.TextField()
    user = models.ForeignKey(User, related_name="blogs", on_delete=models.CASCADE)
    number_voting = models.IntegerField(default=0)
    rating_score = models.FloatField(default=0)


class Blog_Image(models.Model):
    link = models.TextField()
    item = models.ForeignKey(Blog, related_name="images", on_delete=models.CASCADE)


class Blog_Voting(models.Model):
    item = models.ForeignKey(Blog, related_name="votings", on_delete=models.CASCADE)
    point = models.IntegerField()
    user = models.ForeignKey(
        User, related_name="blog_votings", on_delete=models.CASCADE
    )


class Blog_Review(models.Model):
    item = models.ForeignKey(Blog, related_name="reviews", on_delete=models.CASCADE)
    text = models.TextField()
    user = models.ForeignKey(
        User, related_name="blog_reviews", on_delete=models.CASCADE
    )


# More user data
class UserData(models.Model):
    user = models.ForeignKey(User, related_name="user_data", on_delete=models.CASCADE)
    avatar = models.TextField(blank=True)
    phone = models.TextField(blank=True)
    email = models.TextField(blank=True)
    facebook = models.TextField(blank=True)
    instagram = models.TextField(blank=True)
    twitter = models.TextField(blank=True)
