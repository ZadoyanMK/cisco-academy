from django.views.generic.edit import FormView
from django.urls import reverse_lazy
from django.http import HttpResponseRedirect
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import login


class UserLoginView(FormView):
    template_name = 'posts/login.html'
    form_class = AuthenticationForm
    success_url = reverse_lazy('posts-list')

    def form_valid(self, form):
        login(self.request, form.get_user())
        # SignUp.delay(self.request.user)
        # add.delay(1, 2)
        return HttpResponseRedirect(self.success_url)

