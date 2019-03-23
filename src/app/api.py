from .models import Post
from rest_framework import generics, permissions
from rest_framework import viewsets, permissions
from .serializers import PostSerializer
from rest_framework.response import Response
from .tasks import send_message


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = PostSerializer


class SendMessage(generics.GenericAPIView):

  def post(self, request, *args, **kwargs):
    send_message.delay(
        request.data.get('title', ""), 
        request.data.get('description', ''))
    return Response({
        "success": True,
        "data": [
            request.data.get('title', ""), 
            request.data.get('description', '')
        ]
    })
