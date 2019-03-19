from __future__ import absolute_import, unicode_literals

from django.views.generic import TemplateView, View, ListView, DetailView
from django.shortcuts import render, redirect, get_object_or_404
from django.views.generic.edit import FormView
from django.urls import reverse_lazy
from django.http import HttpResponseRedirect

import logging
# from django.contrib.auth.forms import AuthenticationForm, UserCreationForm
# from django.contrib.auth import login, logout


from ..forms import PostModelForm
from ..models import *
# from .tasks import *


class PostPage(FormView):
    template_name = "app/new_post.html"
    form_class = PostModelForm
    success_url = reverse_lazy('posts-list')

    def get(self, request, *args, **kwargs):
        ctx = dict()
        ctx['form'] = self.form_class
        return render(request, self.template_name, ctx)

    def form_valid(self, form):
        form.save(self.request)
        logger = logging.getLogger("test")
        logger.log(level=20, msg="valid")
        return HttpResponseRedirect(self.success_url)

    def form_invalid(self, form):
        logger = logging.getLogger("test")
        logger.log(level=20, msg="error")

        return self.render_to_response(self.get_context_data(form=form))
