from django.urls import path
from .views import *

urlpatterns = [
    path('', send_mail, name='send_mail'),
]
