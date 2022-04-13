from django.urls import include, path
from rest_framework import routers
from api.views import CompanyViewSet, VacancyViewSet

router = routers.DefaultRouter()
router.register(r'companies', CompanyViewSet)
router.register(r'vacancies', VacancyViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
