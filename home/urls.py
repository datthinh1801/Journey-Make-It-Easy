from django.urls import re_path
from . import views

urlpatterns = [
    re_path("static/.*", views.static, name="static"),
    re_path("\.*", views.index, name="index"),
]
