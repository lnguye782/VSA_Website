from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
from .models import *
import json
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages


# Create your views here.
def home(request):
    return render(request, 'app/home.html')

def search(request):
    if request.method == "POST":
        searched = request.POST["searched"]
        #keys = Product.objects.filter(name__contains = searched)
    #return render(request, 'app/search.html', {"searched": searched, "keys":keys})
        return render(request, 'app/search.html', {"searched": searched})