from rest_framework import generics, permissions, views
from rest_framework.response import Response
from ..tasks import send_message
from rest_framework.decorators import action


class SendMessageView(views.APIView): # generics.GenericAPIView): # 
    
    permission_classes = [
        permissions.AllowAny
    ]

    # @action(methods=['post'], detail=True, permission_classes=[permissions.AllowAny])
    def post(self, request, format=None, *args, **kwargs):
        send_message.delay(
            request.data.get('title', ""), 
            request.data.get('description', ''))

        return Response({
            "success": True,
            "data": [
                request.data.get('title', ""), 
                request.data.get('description', '')
            ]
        }, 200)
