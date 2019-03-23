from ..models import Post
from rest_framework import generics, permissions, viewsets
from ..serializers import PostSerializer
from rest_framework.response import Response
from django.core.paginator import Paginator
from django.conf import settings


class PostViewSet(viewsets.ModelViewSet):

    queryset = Paginator(Post.objects.all(), settings.POSTS_PER_PAGE)

    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = PostSerializer

    def list(self, request):
        page = request.GET.get('page', 1)
        queryset = self.queryset.page(page)
        serializer = self.get_serializer(queryset, many=True)

        return Response({
            'data': serializer.data
        }, 200)
    
    def retrieve(self, request, pk=None):
        data = Post.objects.filter(id=int(pk)).first()
        serializer = self.get_serializer(data, many=False)

        return Response({
            'data': serializer.data,
            'pk': pk
        }, 201)
