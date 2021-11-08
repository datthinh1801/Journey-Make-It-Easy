from django.shortcuts import render
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.middleware.csrf import get_token
from django.http import HttpResponse, JsonResponse


def index(request):
    return render(request, 'index.html')


def get_csrf_token(request):
    token = get_token(request)
    return JsonResponse({'token': token})


def signIn(request):
    response = HttpResponse()
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            response.status_code = 200
        else:
            response.status_code = 401
        
        return response

    response.status_code = 405
    return response


def signUp(request):
    response = HttpResponse()
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']

        if User.objects.filter(username=username).exists():
            response.status_code = 302
        else:
            user = User.objects.create_user(username=username, password=password)
            user.save()
            response.status_code = 200

    response.status_code = 405
    return response


def signOut(request):
    response = HttpResponse()
    if request.method == 'POST':
        if request.user.is_authenticated:
            logout(request)
            response.status_code = 200
        else:
            response.status_code = 401

    response.status_code = 405
    return response
