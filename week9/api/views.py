from rest_framework.decorators import action
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from api.serializers import CompanySerializer, VacancySerializer
from api.models import Company, Vacancy


class CompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    permission_classes = (IsAuthenticated, )

    @action(methods=['GET'], detail=True, serializer_class=VacancySerializer)
    def vacancies(self, request, pk=None):
        company = Company.objects.get(pk=pk)
        queryset = Vacancy.objects.all().filter(company=company)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class VacancyViewSet(viewsets.ModelViewSet):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer
    permission_classes = (IsAuthenticated,)

    @action(detail=False, methods=['GET'])
    def top_ten(self, request):
        queryset = Vacancy.objects.all().order_by('salary')[:10]
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

