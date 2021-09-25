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


attraction = Attraction()
attraction.name = 'Test'
attraction.save()
