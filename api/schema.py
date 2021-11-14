import graphene
from graphene_django import DjangoObjectType
import graphql_jwt
from .models import *


class NationType(DjangoObjectType):
    class Meta:
        model = Nation
        feilds = (
            "id",
            "name",
            "number_voting",
            "rating_score",
            "images",
            "votings",
            "reviews",
            "citys",
        )


class CityType(DjangoObjectType):
    class Meta:
        model = City
        feilds = (
            "id",
            "name",
            "number_voting",
            "rating_score",
            "nation_id",
            "attractions",
            "restaurants",
            "stays",
            "images",
            "votings",
            "reviews",
        )


class AttractionType(DjangoObjectType):
    class Meta:
        model = Attraction
        feilds = (
            "id",
            "name",
            "about",
            "address",
            "admission_ticket",
            "open_time",
            "suggested_duration",
            "ggmap",
            "number_voting",
            "rating_score",
            "city_id",
            "images",
            "votings",
            "reviews",
        )


class RestaurantType(DjangoObjectType):
    class Meta:
        model = Restaurant
        feilds = (
            "id",
            "name",
            "address",
            "open_time",
            "phone",
            "website",
            "cuisines",
            "meals",
            "special_diets",
            "ggmap",
            "price_range",
            "features",
            "number_voting",
            "rating_score",
            "city_id",
            "images",
            "votings",
            "reviews",
        )


class StayType(DjangoObjectType):
    class Meta:
        model = Stay
        feilds = (
            "id",
            "name",
            "about",
            "address",
            "phone",
            "email",
            "room_features",
            "room_types",
            "ggmap",
            "property_amenities",
            "number_voting",
            "rating_score",
            "city_id",
            "images",
            "votings",
            "reviews",
        )


class Nation_ImageType(DjangoObjectType):
    class Meta:
        model = Nation_Image
        feilds = ("id", "link", "item")


class City_ImageType(DjangoObjectType):
    class Meta:
        model = City_Image
        feilds = ("id", "link", "item")


class Attraction_ImageType(DjangoObjectType):
    class Meta:
        model = Attraction_Image
        feilds = ("id", "link", "item")


class Restaurant_ImageType(DjangoObjectType):
    class Meta:
        model = Restaurant_Image
        feilds = ("id", "link", "item")


class Stay_ImageType(DjangoObjectType):
    class Meta:
        model = Stay_Image
        feilds = ("id", "link", "item")


class Nation_VotingType(DjangoObjectType):
    class Meta:
        model = Nation_Voting
        feilds = ("id", "item", "point", "user")


class City_VotingType(DjangoObjectType):
    class Meta:
        model = City_Voting
        feilds = ("id", "item", "point", "user")


class Attraction_VotingType(DjangoObjectType):
    class Meta:
        model = Attraction_Voting
        feilds = ("id", "item", "point", "user")


class Restaurant_VotingType(DjangoObjectType):
    class Meta:
        model = Restaurant_Voting
        feilds = ("id", "item", "point", "user")


class Stay_VotingType(DjangoObjectType):
    class Meta:
        model = Stay_Voting
        feilds = ("id", "item", "point", "user")


class Nation_ReviewType(DjangoObjectType):
    class Meta:
        model = Nation_Review
        feilds = ("id", "item", "text", "user")


class City_ReviewType(DjangoObjectType):
    class Meta:
        model = City_Review
        feilds = ("id", "item", "text", "user")


class Attraction_ReviewType(DjangoObjectType):
    class Meta:
        model = Attraction_Review
        feilds = ("id", "item", "text", "user")


class Restaurant_ReviewType(DjangoObjectType):
    class Meta:
        model = Restaurant_Review
        feilds = ("id", "item", "text", "user")


class Stay_ReviewType(DjangoObjectType):
    class Meta:
        model = Stay_Review
        feilds = ("id", "item", "text", "user")


class MealType(DjangoObjectType):
    class Meta:
        model = Meal
        feilds = ("id", "value", "restaurant")


class Special_DietType(DjangoObjectType):
    class Meta:
        model = Special_Diet
        feilds = ("id", "value", "restaurant")


class Restaurant_FeatureType(DjangoObjectType):
    class Meta:
        model = Restaurant_Feature
        feilds = ("id", "value", "restaurant")


class CuisineType(DjangoObjectType):
    class Meta:
        model = Cuisine
        feilds = ("id", "value", "restaurant")


class Room_FeatureType(DjangoObjectType):
    class Meta:
        model = Room_Feature
        feilds = ("id", "value", "stay")


class Room_TypeType(DjangoObjectType):
    class Meta:
        model = Room_Type
        feilds = ("id", "value", "stay")


class Property_AmenitieType(DjangoObjectType):
    class Meta:
        model = Property_Amenitie
        feilds = ("id", "value", "stay")


class BlogType(DjangoObjectType):
    class Meta:
        model = Blog
        feilds = (
            "id",
            "tittle",
            "content",
            "images",
            "number_voting",
            "rating_score",
            "votings",
            "reviews",
        )


class Blog_ImageType(DjangoObjectType):
    class Meta:
        model = Blog_Image
        feilds = ("id", "link", "item")


class Blog_VotingType(DjangoObjectType):
    class Meta:
        model = Blog_Voting
        feilds = ("id", "item", "point", "user")


class Blog_ReviewType(DjangoObjectType):
    class Meta:
        model = Blog_Review
        feilds = ("id", "item", "text", "user")


class UserType(DjangoObjectType):
    class Meta:
        model = User
        feilds = (
            "id",
            "username",
            "first_name",
            "last_name",
            "nation_votings",
            "city_votings",
            "attraction_votings",
            "restaurant_votings",
            "stay_votings",
            "blog_votings",
            "nation_reviews",
            "city_reviews",
            "attraction_reviews",
            "restaurant_reviews",
            "stay_reviews",
            "blog_reviews",
            "blog",
            "user_data",
        )


class UserDataType(DjangoObjectType):
    class Meta:
        model = UserData
        feils = (
            "id",
            "user",
            "avatar",
            "phone",
            "email",
            "facebook",
            "instagram",
            "twitter",
        )


class Query(graphene.ObjectType):
    all_nations = graphene.List(NationType, limit=graphene.Int(required=False))
    get_nation_by_id = graphene.Field(NationType, id=graphene.ID(required=True))
    get_nation_by_name = graphene.Field(NationType, name=graphene.String(required=True))

    all_citys = graphene.List(CityType, limit=graphene.Int(required=False))
    get_city_by_id = graphene.Field(CityType, id=graphene.ID(required=True))
    get_city_by_name = graphene.Field(CityType, name=graphene.String(required=True))

    all_attractions = graphene.List(AttractionType, limit=graphene.Int(required=False))
    get_attraction_by_id = graphene.Field(AttractionType, id=graphene.ID(required=True))
    get_attraction_by_name = graphene.Field(
        AttractionType, name=graphene.String(required=True)
    )

    all_restaurants = graphene.List(RestaurantType, limit=graphene.Int(required=False))
    get_restaurant_by_id = graphene.Field(RestaurantType, id=graphene.ID(required=True))
    get_restaurant_by_name = graphene.Field(
        RestaurantType, name=graphene.String(required=True)
    )

    all_stays = graphene.List(StayType, limit=graphene.Int(required=False))
    get_stay_by_id = graphene.Field(StayType, id=graphene.ID(required=True))
    get_stay_by_name = graphene.Field(StayType, name=graphene.String(required=True))

    all_blogs = graphene.List(BlogType, limit=graphene.Int(required=False))
    get_blog_by_id = graphene.Field(BlogType, id=graphene.ID(required=True))
    get_blog_by_user = graphene.List(BlogType, limit=graphene.Int(required=False))

    get_voting_nation = graphene.Field(Nation_VotingType, id=graphene.ID(required=True))
    get_voting_city = graphene.Field(City_VotingType, id=graphene.ID(required=True))
    get_voting_attraction = graphene.Field(
        Attraction_VotingType, id=graphene.ID(required=True)
    )
    get_voting_restaurant = graphene.Field(
        Restaurant_VotingType, id=graphene.ID(required=True)
    )
    get_voting_stay = graphene.Field(Stay_VotingType, id=graphene.ID(required=True))

    get_review_nation = graphene.Field(Nation_ReviewType, id=graphene.ID(required=True))
    get_review_city = graphene.Field(City_ReviewType, id=graphene.ID(required=True))
    get_review_attraction = graphene.Field(
        Attraction_ReviewType, id=graphene.ID(required=True)
    )
    get_review_restaurant = graphene.Field(
        Restaurant_ReviewType, id=graphene.ID(required=True)
    )
    get_review_stay = graphene.Field(Stay_ReviewType, id=graphene.ID(required=True))

    get_user_info = graphene.Field(UserDataType)

    me = graphene.Field(UserType)

    def resolve_me(self, info):
        user = info.context.user
        if user.is_anonymous:
            raise Exception("Not logged in!")
        return user

    def resolve_all_nations(root, info, limit=0):
        if limit:
            return Nation.objects.all()[:limit]
        return Nation.objects.all()

    def resolve_get_nation_by_id(root, info, id):
        return Nation.objects.get(id=id)

    def resolve_get_nation_by_name(root, info, name):
        return Nation.objects.get(name=name)

    def resolve_all_citys(root, info, limit=0):
        if limit:
            return City.objects.all()[:limit]
        return City.objects.all()

    def resolve_get_city_by_id(root, info, id):
        return City.objects.get(id=id)

    def resolve_get_city_by_name(root, info, name):
        return City.objects.get(name=name)

    def resolve_all_attractions(root, info, limit=0):
        if limit:
            return Attraction.objects.all()[:limit]
        return Attraction.objects.all()

    def resolve_get_attraction_by_id(root, info, id):
        return Attraction.objects.get(id=id)

    def resolve_get_attraction_by_name(root, info, name):
        return Attraction.objects.get(name=name)

    def resolve_all_restaurants(root, info, limit=0):
        if limit:
            return Restaurant.objects.all()[:limit]
        return Restaurant.objects.all()

    def resolve_get_restaurant_by_id(root, info, id):
        return Restaurant.objects.get(id=id)

    def resolve_get_restaurant_by_name(root, info, name):
        return Restaurant.objects.get(name=name)

    def resolve_all_stays(root, info, limit=0):
        if limit:
            return Stay.objects.all()[:limit]
        return Stay.objects.all()

    def resolve_get_stay_by_id(root, info, id):
        return Stay.objects.get(id=id)

    def resolve_get_stay_by_name(root, info, name):
        return Stay.objects.get(name=name)

    def resolve_all_blogs(root, info, limit=0):
        if limit:
            return Blog.objects.all()[:limit]
        return Blog.objects.all()

    def resolve_get_blog_by_id(root, info, id):
        return Blog.objects.get(id=id)

    def resolve_get_blog_by_user(root, info, limit=0):
        if info.context.user.is_authenticated:
            if limit:
                return Blog.objects.get(user=info.context.user)[:limit]
            return Blog.objects.get(user=info.context.user)
        return None

    def resolve_get_voting_nation(root, info, id):
        if info.context.user.is_authenticated:
            return Nation_Voting.objects.get(user=info.context.user)
        return None

    def resolve_get_voting_city(root, info, id):
        if info.context.user.is_authenticated:
            return City_Voting.objects.get(user=info.context.user)
        return None

    def resolve_get_voting_attraction(root, info, id):
        if info.context.user.is_authenticated:
            return Attraction_Voting.objects.get(user=info.context.user)
        return None

    def resolve_get_voting_restaurant(root, info, id):
        if info.context.user.is_authenticated:
            return Restaurant_Voting.objects.get(user=info.context.user)
        return None

    def resolve_get_voting_stay(root, info, id):
        if info.context.user.is_authenticated:
            return Stay_Voting.objects.get(user=info.context.user)
        return None

    def resolve_get_review_nation(root, info, id):
        if info.context.user.is_authenticated:
            return Nation_Review.objects.get(user=info.context.user)
        return None

    def resolve_get_review_city(root, info, id):
        if info.context.user.is_authenticated:
            return City_Review.objects.get(user=info.context.user)
        return None

    def resolve_get_review_attraction(root, info, id):
        if info.context.user.is_authenticated:
            return Attraction_Review.objects.get(user=info.context.user)
        return None

    def resolve_get_review_restaurant(root, info, id):
        if info.context.user.is_authenticated:
            return Restaurant_Review.objects.get(user=info.context.user)
        return None

    def resolve_get_review_stay(root, info, id):
        if info.context.user.is_authenticated:
            return Stay_Review.objects.get(user=info.context.user)
        return None

    def resolve_get_user_info(root, info):
        if info.context.user.is_authenticated:
            return UserData.objects.get(user=info.context.user)
        return None


class CreateBlog(graphene.Mutation):
    class Arguments:
        tittle = graphene.String(required=True)
        content = graphene.String(required=True)

    blog = graphene.Field(BlogType)

    @classmethod
    def mutate(cls, root, info, tittle, content):
        if not info.context.user.is_authenticated:
            return
        blog = Blog()
        blog.user = info.context.user
        blog.tittle = tittle
        blog.content = content
        blog.save()
        return CreateBlog(blog=blog)


class UpdateBlog(graphene.Mutation):
    class Arguments:
        id = graphene.ID(required=True)
        tittle = graphene.String(required=True)
        content = graphene.String(required=True)

    blog = graphene.Field(BlogType)

    @classmethod
    def mutate(cls, root, info, id, tittle, content):
        if not info.context.user.is_authenticated:
            return
        blog = Blog.objects.get(id=id, user=info.context.user)
        blog.tittle = tittle
        blog.content = content
        blog.save()
        return CreateBlog(blog=blog)


class UpdateUserData(graphene.Mutation):
    class Arguments:
        avatar = graphene.String(required=False)
        phone = graphene.String(required=False)
        email = graphene.String(required=False)
        facebook = graphene.String(required=False)
        instagram = graphene.String(required=False)
        twitter = graphene.String(required=False)

    user = graphene.Field(UserDataType)

    @classmethod
    def mutate(
        cls,
        root,
        info,
        avatar="",
        phone="",
        email="",
        facebook="",
        instagram="",
        twitter="",
    ):
        if info.context.user.is_anonymous:
            return
        user = UserData.objects.get(user=info.context.user)
        user.avatar = avatar
        user.phone = phone
        user.email = email
        user.facebook = facebook
        user.instagram = instagram
        user.twitter = twitter
        user.save()
        return UpdateUserData(user=user)


class VoteNation(graphene.Mutation):
    class Arguments:
        id = graphene.ID(required=True)
        point = graphene.Int(required=True)

    vote = graphene.Field(Nation_VotingType)

    @classmethod
    def mutate(cls, root, info, id, point):
        if info.context.user.is_anonymous:
            return
        vote = Nation_Voting.objects.filter(item=id, user=info.context.user)
        if vote and len(vote) > 0:
            vote = vote[0]
        else:
            vote = Nation_Voting()
        item = Nation.objects.get(id=id)
        item.rating_score = ((item.rating_score * item.number_voting) + point) / (
            item.number_voting + 1
        )
        item.number_voting += 1
        item.save()
        vote.item = item
        vote.user = info.context.user
        vote.point = point
        vote.save()
        return VoteNation(vote=vote)


class VoteCity(graphene.Mutation):
    class Arguments:
        id = graphene.ID(required=True)
        point = graphene.Int(required=True)

    vote = graphene.Field(City_VotingType)

    @classmethod
    def mutate(cls, root, info, id, point):
        if info.context.user.is_anonymous:
            return
        vote = City_Voting.objects.filter(item=id, user=info.context.user)
        if vote and len(vote) > 0:
            vote = vote[0]
        else:
            vote = City_Voting()
        item = City.objects.get(id=id)
        item.rating_score = ((item.rating_score * item.number_voting) + point) / (
            item.number_voting + 1
        )
        item.number_voting += 1
        item.save()
        vote.item = item
        vote.user = info.context.user
        vote.point = point
        vote.save()
        return VoteNation(vote=vote)


class VoteAttraction(graphene.Mutation):
    class Arguments:
        id = graphene.ID(required=True)
        point = graphene.Int(required=True)

    vote = graphene.Field(Attraction_VotingType)

    @classmethod
    def mutate(cls, root, info, id, point):
        if info.context.user.is_anonymous:
            return
        vote = Attraction_Voting.objects.filter(item=id, user=info.context.user)
        if vote and len(vote) > 0:
            vote = vote[0]
        else:
            vote = Attraction_Voting()
        item = Attraction.objects.get(id=id)
        item.rating_score = ((item.rating_score * item.number_voting) + point) / (
            item.number_voting + 1
        )
        item.number_voting += 1
        item.save()
        vote.item = item
        vote.user = info.context.user
        vote.point = point
        vote.save()
        return VoteAttraction(vote=vote)


class VoteRestaurant(graphene.Mutation):
    class Arguments:
        id = graphene.ID(required=True)
        point = graphene.Int(required=True)

    vote = graphene.Field(Restaurant_VotingType)

    @classmethod
    def mutate(cls, root, info, id, point):
        if not info.context.user.is_authenticated:
            return
        vote = Restaurant_Voting.objects.filter(item=id, user=info.context.user)
        if vote and len(vote) > 0:
            vote = vote[0]
        else:
            vote = Restaurant_Voting()
        item = Restaurant.objects.get(id=id)
        item.rating_score = ((item.rating_score * item.number_voting) + point) / (
            item.number_voting + 1
        )
        item.number_voting += 1
        item.save()
        vote.item = item
        vote.user = info.context.user
        vote.point = point
        vote.save()
        return VoteRestaurant(vote=vote)


class VoteStay(graphene.Mutation):
    class Arguments:
        id = graphene.ID(required=True)
        point = graphene.Int(required=True)

    vote = graphene.Field(Stay_VotingType)

    @classmethod
    def mutate(cls, root, info, id, point):
        if not info.context.user.is_authenticated:
            return
        vote = Stay_Voting.objects.filter(item=id, user=info.context.user)
        if vote and len(vote) > 0:
            vote = vote[0]
        else:
            vote = Stay_Voting()
        item = Stay.objects.get(id=id)
        item.rating_score = ((item.rating_score * item.number_voting) + point) / (
            item.number_voting + 1
        )
        item.number_voting += 1
        item.save()
        vote.item = item
        vote.user = info.context.user
        vote.point = point
        vote.save()
        return VoteStay(vote=vote)


class VoteBlog(graphene.Mutation):
    class Arguments:
        id = graphene.ID(required=True)
        point = graphene.Int(required=True)

    vote = graphene.Field(Blog_VotingType)

    @classmethod
    def mutate(cls, root, info, id, point):
        if not info.context.user.is_authenticated:
            return
        vote = Blog_Voting.objects.filter(item=id, user=info.context.user)
        if vote and len(vote) > 0:
            vote = vote[0]
        else:
            vote = Blog_Voting()
        item = Blog.objects.get(id=id)
        item.rating_score = ((item.rating_score * item.number_voting) + point) / (
            item.number_voting + 1
        )
        item.number_voting += 1
        item.save()
        vote.item = item
        vote.user = info.context.user
        vote.point = point
        vote.save()
        return VoteBlog(vote=vote)


class ReviewNation(graphene.Mutation):
    class Arguments:
        id = graphene.ID(required=True)
        review = graphene.String(required=True)

    reviews = graphene.Field(Nation_ReviewType)

    @classmethod
    def mutate(cls, root, info, id, review):
        if not info.context.user.is_authenticated:
            return
        reviews = Nation_Review()
        reviews.item = Nation.objects.get(id=id)
        reviews.user = info.context.user
        reviews.text = review
        reviews.save()
        return ReviewNation(reviews=reviews)


class ReviewCity(graphene.Mutation):
    class Arguments:
        id = graphene.ID(required=True)
        review = graphene.String(required=True)

    reviews = graphene.Field(City_ReviewType)

    @classmethod
    def mutate(cls, root, info, id, review):
        if not info.context.user.is_authenticated:
            return
        reviews = City_Review()
        reviews.item = City.objects.get(id=id)
        reviews.user = info.context.user
        reviews.text = review
        reviews.save()
        return ReviewCity(reviews=reviews)


class ReviewAttraction(graphene.Mutation):
    class Arguments:
        id = graphene.ID(required=True)
        review = graphene.String(required=True)

    reviews = graphene.Field(Attraction_ReviewType)

    @classmethod
    def mutate(cls, root, info, id, review):
        if not info.context.user.is_authenticated:
            return
        reviews = Attraction_Review()
        reviews.item = Attraction.objects.get(id=id)
        reviews.user = info.context.user
        reviews.text = review
        reviews.save()
        return AttractionCity(reviews=reviews)


class ReviewRestaurant(graphene.Mutation):
    class Arguments:
        id = graphene.ID(required=True)
        review = graphene.String(required=True)

    reviews = graphene.Field(Restaurant_ReviewType)

    @classmethod
    def mutate(cls, root, info, id, review):
        if not info.context.user.is_authenticated:
            return
        reviews = Restaurant_Review()
        reviews.item = Restaurant.objects.get(id=id)
        reviews.user = info.context.user
        reviews.text = review
        reviews.save()
        return ReviewRestaurant(reviews=reviews)


class ReviewStay(graphene.Mutation):
    class Arguments:
        id = graphene.ID(required=True)
        review = graphene.String(required=True)

    reviews = graphene.Field(Stay_ReviewType)

    @classmethod
    def mutate(cls, root, info, id, review):
        if not info.context.user.is_authenticated:
            return
        reviews = Stay_Review()
        reviews.item = Stay.objects.get(id=id)
        reviews.user = info.context.user
        reviews.text = review
        reviews.save()
        return ReviewStay(reviews=reviews)


class ReviewBlog(graphene.Mutation):
    class Arguments:
        id = graphene.ID(required=True)
        review = graphene.String(required=True)

    reviews = graphene.Field(Blog_ReviewType)

    @classmethod
    def mutate(cls, root, info, id, review):
        if not info.context.user.is_authenticated:
            return
        reviews = Blog_Review()
        reviews.item = Blog.objects.get(id=id)
        reviews.user = info.context.user
        reviews.text = review
        reviews.save()
        return ReviewBlog(reviews=reviews)


class Mutation(graphene.ObjectType):
    token_auth = graphql_jwt.ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.Verify.Field()
    refresh_token = graphql_jwt.Refresh.Field()
    revoke_token = graphql_jwt.Revoke.Field()

    create_blog = CreateBlog.Field()
    update_blog = UpdateBlog.Field()
    update_userdata = UpdateUserData.Field()
    voting_nation = VoteNation.Field()
    voting_city = VoteCity.Field()
    voting_attraction = VoteAttraction.Field()
    voting_restaurant = VoteRestaurant.Field()
    voting_stay = VoteStay.Field()
    voting_blog = VoteBlog.Field()
    review_nation = ReviewNation.Field()
    review_city = ReviewCity.Field()
    review_attraction = ReviewAttraction.Field()
    review_restaurant = ReviewRestaurant.Field()
    review_stay = ReviewStay.Field()
    review_blog = ReviewBlog.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
