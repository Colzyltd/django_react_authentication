from django.contrib import admin
from django.urls import path, include
from . import views

app_name = 'server'

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index),
    path('dashboard/', include('myapp.urls')),
    path('api/', include('account.urls')),    
]
