from django.shortcuts import render, redirect
from django.contrib import messages
from .tasks import send_email_task
import base64


def send_mail(request):
    if request.method == 'POST':
        subject = request.POST.get('subject')
        email = request.POST.get('email')
        message = request.POST.get('message')
        send_email_task.delay(subject, email, message)
    return render(request, 'send_mail.html')
