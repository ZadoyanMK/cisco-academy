from ..models import Course
from rest_framework import generics, permissions, viewsets
from ..serializers import  CourseSerializer
from rest_framework.response import Response


class CourseViewSet(viewsets.ModelViewSet):

    queryset = Course.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = CourseSerializer

    def list(self, request, lang=Course.EN_LANG):

        queryset=Course.objects.filter(language=lang)
        serializer_data = self.get_serializer(queryset, many=True).data

        return Response({
            'data': serializer_data,
        })
