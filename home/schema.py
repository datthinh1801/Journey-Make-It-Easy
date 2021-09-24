import graphene
from graphene_django import DjangoObjectType

from .models import Search


class SearchType(DjangoObjectType):
    class Meta:
        model = Search


class Query(graphene.ObjectType):
    search_results = graphene.List(SearchType)

    def resolve_search_results(self, info, **kwargs):
        return Search.objects.all()
