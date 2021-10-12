from djongo import models


class Rating(models.Model):
    _id = models.ObjectIdField()
    stars = models.FloatField()
    num_reviews = models.IntegerField()


class FeaturedDestination(models.Model):
    _id = models.ObjectIdField()
    name = models.CharField(max_length=50)
    img_src = models.TextField()
    rating = models.EmbeddedField(
        model_container=Rating
    )
