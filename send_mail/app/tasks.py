import time
from celery import shared_task
from django.core.mail import EmailMessage
from django.conf import settings

@shared_task
def send_email_task(subject, email, message):
    email_message = EmailMessage(subject, message, settings.EMAIL_HOST_USER, [email])
    email_message.send()


