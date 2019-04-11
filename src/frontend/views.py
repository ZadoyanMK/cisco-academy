from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect


def index(request, pk=None, *a, **kwargs):
    return render(request, 'frontend/index.html')


def redirect_to_index(request, *a, **kwargs):
    return redirect('/en/')


def redirect_to_404(request, *a, **kw):
    return HttpResponseRedirect('/404/')