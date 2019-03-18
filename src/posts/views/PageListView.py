from __future__ import absolute_import, unicode_literals

from django.views.generic import TemplateView, View, ListView, DetailView
from django.shortcuts import render, redirect, get_object_or_404
from django.views.generic.edit import FormView
from django.urls import reverse_lazy
from django.http import HttpResponseRedirect

from posts.models import Post


class PageListView(TemplateView):
    template_name = 'posts/index.html'

    def get(self, request, **kwargs):
        ctx = {
            'posts': Post.objects.all(),
            'test': request.GET.get("test", "none")  # kwargs.get("test", "none")
            # 'user': request.user,
        }
        return render(request, self.template_name, ctx)
