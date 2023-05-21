import os
from celery import Celery

# Définir le module Django à utiliser pour la configuration de Celery
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'send_mail.settings')

# Créer une instance de l'application Celery
app = Celery('send_mail')

# Charger la configuration de Celery à partir des paramètres Django
app.config_from_object('django.conf:settings', namespace='CELERY')

# Charger les tâches de l'application Django
app.autodiscover_tasks()
