from ..models import Post
from rest_framework import generics, permissions, viewsets
from ..serializers import PostSerializer
from rest_framework.response import Response
from ..helpers import CustomLimitOffsetPagination
from django.core.paginator import Paginator, EmptyPage
from django.conf import settings


class PostViewSet(viewsets.ModelViewSet):

    queryset = Post.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = PostSerializer
    pagination_class = CustomLimitOffsetPagination

    def list(self, request):
        queryset = self.paginate_queryset(
            queryset=Post.objects.all()
        )
        serializer_data = self.get_serializer(queryset, many=True).data

        return Response({
            'data': serializer_data,
            'pagination':{
                'total_count': len(Post.objects.all()),
                'per_page': settings.POSTS_PER_PAGE
            }
        })

    def retrieve(self, request, pk=None):
        data = Post.objects.filter(id=int(pk))

        if (data):
            serializer = self.get_serializer(data.first(), many=False)

            return Response({
                'data': serializer.data,
            }, 200)
        else:
            return Response({
                'data': None
            }, 203)
