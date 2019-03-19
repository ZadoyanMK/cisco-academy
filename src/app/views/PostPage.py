from __future__ import absolute_import, unicode_literals

from django.views.generic import TemplateView, View, ListView, DetailView
from django.shortcuts import render, redirect, get_object_or_404
from django.views.generic.edit import FormView
from django.urls import reverse_lazy
from django.http import HttpResponseRedirect

import logging
# from django.contrib.auth.forms import AuthenticationForm, UserCreationForm
# from django.contrib.auth import login, logout


from ..models import *
# from .tasks import *


class PostPage(DetailView):
    template_name = "app/post.html"
    model = Post

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['now'] = "hello"
        return context

    # def form_valid(self, form):
    #     form.save(self.request)
    #     logger = logging.getLogger("test")
    #     logger.log(level=20, msg="valid")
    #     return HttpResponseRedirect(self.success_url)
    #
    # def form_invalid(self, form):
    #     logger = logging.getLogger("test")
    #     logger.log(level=20, msg="error")
    #
    #     return self.render_to_response(self.get_context_data(form=form))
