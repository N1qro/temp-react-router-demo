from django.http import JsonResponse, HttpRequest

from products.models import Product
from products.serializers import ProductSerializer

from rest_framework.response import Response
from rest_framework.decorators import api_view


@api_view(["GET"])
def home(request: HttpRequest):
    instance = Product.objects.all().order_by("?").first()

    data = {}
    if instance:
        data = ProductSerializer(instance).data

    return Response(data)


@api_view(["POST"])
def product(request: HttpRequest):
    serializer = ProductSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        instance = serializer.validated_data
        return Response(instance)
