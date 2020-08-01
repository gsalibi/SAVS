from django.urls import path

from . import views

app_name = 'savs_app'

urlpatterns = [
    path('', views.home_view, name='home'),
    path('sobre/', views.sobre_view, name='sobre'),
    path('igualdade/', views.igualdade_view, name='igualdade'),
    path('violencia-sexual/', views.violencia_view, name='violencia-sexual'),
    path('savs/', views.savs_view, name='savs'),
    path('queixa/', views.queixa_view, name='queixa'),
    path('participe/', views.participe_view, name='participe'),
    path('test-complaints/', views.test_show_complaints_view, name='test-complaints'), 
    path('admin/download-csv-anon/', views.csv_download_anonymous, name='csv_download_anonymous' ),
    path('admin/download-csv-ident/', views.csv_download_identified, name='csv_download_identified'),
]
