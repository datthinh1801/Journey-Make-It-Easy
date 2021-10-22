import graphene
from graphene_django import DjangoObjectType
from .models import *

class NationType(DjangoObjectType):
    class Meta:
        model = Nation
        feilds = ('id', 'name', 'number_voting', 'rating_score', 'citys')


class CityType(DjangoObjectType):
    class Meta:
        model = City
        feilds = ('id', 'name', 'number_voting', 'rating_score', 'nation_id', 'attractions', 'restaurants', 'stays')


class AttractionType(DjangoObjectType):
    class Meta:
        model = Attraction
        feilds = ('id', 'name', 'about', 'address', 'admission_ticket', 'open_time', 'suggested_duration', 'number_voting',
                  'rating_score', 'city_id', 'images', 'voting')


class RestaurantType(DjangoObjectType):
    class Meta:
        model = Restaurant
        feilds = ('id', 'name', 'address', 'open_time', 'phone', 'website', 'cuisines', 'meals', 'special_diets',
                  'price_range', 'features', 'number_voting', 'rating_score', 'city_id', 'images', 'voting')


class StayType(DjangoObjectType):
    class Meta:
        model = Stay
        feilds = ('id', 'name', 'about', 'address', 'phone', 'email', 'room_features', 'room_types'
                  'property_amenities', 'number_voting', 'rating_score', 'city_id', 'images', 'voting')


class Nation_ImageType(DjangoObjectType):
    class Meta:
        model = Nation_Image
        feilds = ('id', 'link', 'item_id')


class Nation_VotingType(DjangoObjectType):
    class Meta:
        model = Nation_Voting
        feilds = ('id', 'item_vote', 'point', 'user')


class City_ImageType(DjangoObjectType):
    class Meta:
        model = City_Image
        feilds = ('id', 'link', 'item_id')


class City_VotingType(DjangoObjectType):
    class Meta:
        model = City_Voting
        feilds = ('id', 'item_vote', 'point', 'user')


class Attraction_ImageType(DjangoObjectType):
    class Meta:
        model = Attraction_Image
        feilds = ('id', 'link', 'item_id')


class Attraction_VotingType(DjangoObjectType):
    class Meta:
        model = Attraction_Voting
        feilds = ('id', 'item_vote', 'point', 'user')

class Restaurant_ImageType(DjangoObjectType):
    class Meta:
        model = Restaurant_Image
        feilds = ('id', 'link', 'item_id')


class Restaurant_VotingType(DjangoObjectType):
    class Meta:
        model = Restaurant_Voting
        feilds = ('id', 'item_vote', 'point', 'user')


class Stay_ImageType(DjangoObjectType):
    class Meta:
        model = Stay_Image
        feilds = ('id', 'link', 'item_id')


class Stay_VotingType(DjangoObjectType):
    class Meta:
        model = Stay_Voting
        feilds = ('id', 'item_vote', 'point', 'user')


class Query(graphene.ObjectType):
    all_nations = graphene.List(NationType)
    get_nation_by_id = graphene.Field(NationType, id=graphene.String(required=True))
    get_nation_by_name = graphene.Field(NationType, name=graphene.String(required=True))

    all_citys = graphene.List(CityType)
    get_city_by_id = graphene.Field(CityType, id=graphene.String(required=True))
    get_city_by_name = graphene.Field(CityType, name=graphene.String(required=True))

    all_attractions = graphene.List(AttractionType)
    get_attraction_by_id = graphene.Field(AttractionType, id=graphene.String(required=True))
    get_attraction_by_name = graphene.Field(AttractionType, name=graphene.String(required=True))

    all_restaurants = graphene.List(RestaurantType)
    get_restaurant_by_id = graphene.Field(RestaurantType, id=graphene.String(required=True))
    get_restaurant_by_name = graphene.Field(RestaurantType, name=graphene.String(required=True))

    all_stays = graphene.List(StayType)
    get_stay_by_id = graphene.Field(StayType, id=graphene.String(required=True))
    get_stay_by_name = graphene.Field(StayType, name=graphene.String(required=True))

    get_voting_nation = graphene.Field(Nation_VotingType, user=graphene.String(required=True), id=graphene.String(required=True))
    get_voting_city = graphene.Field(City_VotingType, user=graphene.String(required=True), id=graphene.String(required=True))
    get_voting_attraction = graphene.Field(Attraction_VotingType, user=graphene.String(required=True), id=graphene.String(required=True))
    get_voting_restaurant = graphene.Field(Restaurant_VotingType, user=graphene.String(required=True), id=graphene.String(required=True))
    get_voting_stay = graphene.Field(Stay_VotingType, user=graphene.String(required=True), id=graphene.String(required=True))


    def resolve_all_nations(root, info):
        return Nation.objects.all()

    def resolve_get_nation_by_id(root, info, id):
        return Nation.objects.get(id=id)

    def resolve_get_nation_by_name(root, info, name):
        return Nation.objects.get(name=name)

    def resolve_all_citys(root, info):
        return City.objects.all()

    def resolve_get_city_by_id(root, info, id):
        return City.objects.get(id=id)

    def resolve_get_city_by_name(root, info, name):
        return City.objects.get(name=name)

    def resolve_all_attractions(root, info):
        return Attraction.objects.all()

    def resolve_get_attraction_by_id(root, info, id):
        return Attraction.objects.get(id=id)

    def resolve_get_attraction_by_name(root, info, name):
        return Attraction.objects.get(name=name)

    def resolve_all_restaurants(root, info):
        return Restaurant.objects.all()

    def resolve_get_restaurant_by_id(root, info, id):
        return Restaurant.objects.get(id=id)

    def resolve_get_restaurant_by_name(root, info, name):
        return Restaurant.objects.get(name=name)

    def resolve_all_stays(root, info):
        return Stay.objects.all()

    def resolve_get_stay_by_id(root, info, id):
        return Stay.objects.get(id=id)

    def resolve_get_stay_by_name(root, info, name):
        return Stay.objects.get(name=name)


schema = graphene.Schema(query=Query)
