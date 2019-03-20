from django.contrib.auth import logout
from django.http import HttpResponseRedirect
from django.urls import reverse_lazy
from ..tasks import send_message
from django.core.mail import send_mail


def logout_view(request):
    logout(request)
    return HttpResponseRedirect(reverse_lazy('posts-list'))


def send(request):
    send_message.delay()

    # send_mail(
    #     'Subject here',
    #     'Here is the message.',
    #     'konzamir@gmail.com',
    #     ['konzamir@gmail.com'],
    #     fail_silently=False,
    #     auth_password="M1998k0921",
    #     auth_user="konzamir@gmail.com"
    # )
    return HttpResponseRedirect(reverse_lazy('posts-list'))
