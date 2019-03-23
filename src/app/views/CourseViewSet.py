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
