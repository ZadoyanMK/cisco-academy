from django.contrib.auth import logout
from django.http import HttpResponseRedirect
from django.urls import reverse_lazy
from ..tasks import send_message


def logout_view(request):
    logout(request)
    return HttpResponseRedirect(reverse_lazy('posts-list'))


def send_mail(request):
    send_message()
    return HttpResponseRedirect(reverse_lazy('posts-list'))
