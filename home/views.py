from django.shortcuts import render
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.middleware.csrf import get_token
from django.http import HttpResponse, JsonResponse


def index(request):
    return render(request, 'index.html')


def get_csrf_token(request):
    token = get_token(request)
    return token


def signIn(request):
    response = HttpResponse()
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']

        user = authenticate(request, username=username, password=password)

        if user is not None:
            # login successfully
            login(request, user)
            response.status_code = 200
        else:
            # already login
            response.status_code = 302
        
        request.session['username'] = username
        request.session['password'] = password
        request.session['csrftoken'] = get_token(request)

        return response
    else:
        # method is not supported
        response.status_code = 405
    return response


def signUp(request):
    response = HttpResponse()
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']

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
    if request.method == 'POST':
        print(request.session.get('username'))
        if request.session.get('username') and request.session.get('password') and request.session.get('csrftoken'):
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
