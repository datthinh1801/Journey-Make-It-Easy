from django.shortcuts import render
from django.contrib.auth.models import User, auth
from django.contrib import messages
from django.middleware.csrf import get_token
from django.http import HttpResponse, JsonResponse


def index(request):
    return render(request, 'index.html')


def get_csrf_token(request):
    token = get_token(request)
    return JsonResponse({'token': token})


def login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']

        user = auth.authenticate(username=username, password=password)

        if user is not None:
            auth.login(request, user)
        else:
            return JsonResponse({'messages': 'User not exists'})

    return JsonResponse({'messages': 'Method not support'})


def register(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']

        if User.objects.filter(username=username).exists():
            return JsonResponse({'messages': 'Username already exists'})
        else:
            user = User.objects.create_user(username=username, password=password)
            user.save()
            return JsonResponse({'messages': 'Register success'})

    return JsonResponse({'messages': 'Method not support'})


def logout(request):
    if request.method == 'POST':
        if request.user.is_authenticated:
            auth.logout(request)
            return JsonResponse({'messages': 'Log out success'})
        else:
            return JsonResponse({'messages': 'You are not login'})

    return JsonResponse({'messages': 'Method not support'})
