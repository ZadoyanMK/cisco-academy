from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect


def index(request, pk=None, **kwargs):
    return render(request, 'frontend/index.html')


def redirect_to_index(request, **kwargs):
    return redirect('/en/')


def redirect_to_404(request, **kw):
    return HttpResponseRedirect('/404/')