from django.urls import path
from . import views

urlpatterns = [
    path("images/Hero_image.png", views.images, name="images"),
    path("images/Hero_text.png", views.images, name="images"),
    path("images/signin_img.jpg", views.images, name="images"),
    path("", views.index, name="index"),
]
