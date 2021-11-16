from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.http import HttpResponse, FileResponse

import os


def index(request):
    return render(request, "index.html")


def images(request):
    img_name = request.get_full_path().split("/")[-1]
    img_base_path = os.path.join(os.getcwd(), "home", "var", "static_root", "images")
    response = FileResponse(open(os.path.join(img_base_path, img_name), "rb"))
    return response


def signIn(request):
    response = HttpResponse()
    if request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]

        user = authenticate(username=username, password=password)

        if user is not None:
            # login successfully
            login(request, user)
            response.status_code = 200
        else:
            # login failed
            response.status_code = 404
    else:
        # method is not supported
        response.status_code = 405
    return response


def signUp(request):
    response = HttpResponse()
    if request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]

        if User.objects.filter(username=username).exists():
            # username already exists
            response.status_code = 302
        else:
            # create new user successfully
            user = User.objects.create_user(username=username, password=password)
            user.save()
            response.status_code = 200
    else:
        # method is not supported
        response.status_code = 405
    return response


def signOut(request):
    response = HttpResponse()
    print(request.user)
    if request.method == "POST":
        if request.user.is_authenticated:
            # logout successfully
            logout(request)
            response.status_code = 200
        else:
            # already logout
            response.status_code = 401

    else:
        # method is not supported
        response.status_code = 405
    return response
