from django.urls import path

from . import views

app_name = 'savs_app'

urlpatterns = [
    path('', views.queixa_view, name='queixa'),
    path('queixa/', views.queixa_view, name='queixa'),
    path('sobre/', views.sobre_view, name='sobre'),
    path('igualdade/', views.igualdade_view, name='igualdade'),
    path('violencia-sexual/', views.violencia_view, name='violencia-sexual'),
    path('savs/', views.savs_view, name='savs'),
    path('participe/', views.participe_view, name='participe'),
    path('test-complaints/', views.test_show_complaints_view, name='test-complaints'),
]
