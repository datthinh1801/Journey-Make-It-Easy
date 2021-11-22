from django.urls import path, re_path
from . import views

urlpatterns = [
    # path("images/Hero_image.png", views.static, name="images"),
    # path("images/Hero_text.png", views.static, name="images"),
    # path("images/signin_img.jpg", views.static, name="images"),
    # re_path("[(png)(jpg)]$", views.static, name="images"),
    # path("static/js/app.js", views.static, name="js"),
    # path("static/js/chunk-vendors.js", views.static, name="css"),
    # path("static/css/app.css", views.static, name="css"),
    re_path("static/.*", views.static, name="static"),
    path("", views.index, name="index"),
]
