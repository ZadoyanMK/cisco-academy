from __future__ import absolute_import, unicode_literals

from django.views.generic import TemplateView, View, ListView, DetailView
from django.shortcuts import render, redirect, get_object_or_404
from django.views.generic.edit import FormView
from django.urls import reverse_lazy
from django.http import HttpResponseRedirect, response
from ..tasks import send_message


class SendMessage(View):
    def post(self, **kwargs):
        send_message.delay()
        return HttpResponse()