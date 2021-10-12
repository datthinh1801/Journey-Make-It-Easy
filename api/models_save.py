from djongo import models


class Image(models.Model):
    _id = models.ObjectIdField()
    src = models.TextField()


class Attraction(models.Model):
    _id = models.ObjectIdField()
    name = models.CharField(max_length=100)
    about = models.TextField()
    address = models.TextField()
    admission_ticket = models.TextField(blank=True)
    images = models.ArrayField(
        model_container=Image
    )
    open_time = models.TextField(blank=True)
    suggested_duration = models.TextField(blank=True)


class RestaurantDetails(models.Model):
    _id = models.ObjectIdField()
    cuisines = models.TextField()
    meals = models.TextField()
    special_diets = models.TextField()


class Restaurant(models.Model):
    _id = models.ObjectIdField()
    name = models.CharField(max_length=100)
    address = models.TextField()
    open_time = models.TextField()
    phone = models.TextField()
    website = models.TextField()
    details = models.EmbeddedField(
        model_container=RestaurantDetails
    )


class City(models.Model):
    _id = models.ObjectIdField()
    name = models.TextField()
    attractions = models.ArrayField(
        model_container=Attraction
    )
    restaurants = models.ArrayField(
        model_container=Restaurant
    )
