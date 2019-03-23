from rest_framework import generics, permissions
from rest_framework.response import Response
from ..tasks import send_message


class SendMessageView(generics.GenericAPIView):

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
