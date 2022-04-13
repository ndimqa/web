from rest_framework import serializers

from api.models import Vacancy, Company


class VacancySerializer(serializers.ModelSerializer):
    company = serializers.SerializerMethodField()
    class Meta:
        model = Vacancy
        fields = ['name', 'description', 'salary', 'company']

    def get_company(self, obj):
        return obj.company.name


class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ['name', 'description', 'city', 'address']

