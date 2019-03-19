from django.contrib.auth import logout
from django.http import HttpResponseRedirect
from django.urls import reverse_lazy


def logout_view(request):
    logout(request)
    return HttpResponseRedirect(reverse_lazy('posts-list'))
