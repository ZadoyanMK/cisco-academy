from __future__ import absolute_import, unicode_literals

from django.contrib.auth.models import User
from django.core.mail import send_mail

from celery import shared_task
from celery import task
# from .models import Messages, Vehicle, Order

from datetime import datetime, timedelta
from django.utils import timezone


@shared_task
def send_message():
    send_mail(
        'Subject here',
        'Here is the message.',
        'konzamir@gmail.com',
        ['konzamir@gmail.com'],
        fail_silently=False,

    )

    return 'Message was sent!'
