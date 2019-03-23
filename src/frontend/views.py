from django.shortcuts import render

def index(request, pk=None, **kwargs):
    return render(request, 'frontend/index.html')