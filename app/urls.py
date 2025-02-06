from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name="home"),
    path('search/', views.search, name="search"),
    path('eboard/', views.eboard, name="eboard"),
    path('intern/', views.intern, name="intern"),
    path('gbm/', views.gbm, name="gbm"),
    path('sponsor/', views.sponsor, name="sponsor"),
    path('membership/', views.membership, name="membership"),
    path('aboutus/', views.aboutus, name="aboutus"),
]
