from django.db.models import query, Q
import graphene
from graphene_django import DjangoObjectType
import graphql_jwt
from .models import *
from rcs.rcs import RCSAttraction, RCSRestaurant, RCSStay


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
            "cities",
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


class Nation_ReviewType(DjangoObjectType):
    class Meta:
        model = Nation_Review
        feilds = ("id", "item", "point", "text", "user")


class City_ReviewType(DjangoObjectType):
    class Meta:
        model = City_Review
        feilds = ("id", "item", "point", "text", "user")


class Attraction_ReviewType(DjangoObjectType):
    class Meta:
        model = Attraction_Review
        feilds = ("id", "item", "point", "text", "user")


class Restaurant_ReviewType(DjangoObjectType):
    class Meta:
        model = Restaurant_Review
        feilds = ("id", "item", "point", "text", "user")


class Stay_ReviewType(DjangoObjectType):
    class Meta:
        model = Stay_Review
        feilds = ("id", "item", "point", "text", "user")


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
            "title",
            "content",
            "images",
            "number_voting",
            "rating_score",
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


# Main Query class
class Query(graphene.ObjectType):
    all_nations = graphene.List(NationType, limit=graphene.Int(required=False))
    get_nation_by_id = graphene.Field(
        NationType, id=graphene.ID(required=True))
    get_nation_by_name = graphene.Field(
        NationType, name=graphene.String(required=True))

    all_cities = graphene.List(CityType, limit=graphene.Int(required=False))
    get_city_by_id = graphene.Field(CityType, id=graphene.ID(required=True))
    get_city_by_name = graphene.Field(
        CityType, name=graphene.String(required=True))

    all_attractions = graphene.List(
        AttractionType, limit=graphene.Int(required=False))
    get_attraction_by_id = graphene.Field(
        AttractionType, id=graphene.ID(required=True))
    get_attraction_by_name = graphene.Field(
        AttractionType, name=graphene.String(required=True)
    )

    all_restaurants = graphene.List(
        graphene.NonNull(RestaurantType), limit=graphene.Int(required=False)
    )
    get_restaurant_by_id = graphene.Field(
        RestaurantType, id=graphene.ID(required=True))
    get_restaurant_by_name = graphene.Field(
        RestaurantType, name=graphene.String(required=True)
    )

    all_stays = graphene.List(StayType, limit=graphene.Int(required=False))
    get_stay_by_id = graphene.Field(StayType, id=graphene.ID(required=True))
    get_stay_by_name = graphene.Field(
        StayType, name=graphene.String(required=True))

    all_blogs = graphene.List(BlogType, limit=graphene.Int(required=False))
    get_blog_by_id = graphene.Field(BlogType, id=graphene.ID(required=True))
    get_blog_by_user = graphene.List(
        BlogType, limit=graphene.Int(required=False))

    get_review_nation = graphene.List(
        Nation_ReviewType, item_id=graphene.ID(required=True)
    )
    get_review_city = graphene.List(
        City_ReviewType, item_id=graphene.ID(required=True))
    get_review_attraction = graphene.List(
        Attraction_ReviewType, item_id=graphene.ID(required=True)
    )
    get_review_restaurant = graphene.List(
        Restaurant_ReviewType, item_id=graphene.ID(required=True)
    )
    get_review_stay = graphene.List(
        Stay_ReviewType, id=graphene.ID(required=True))

    get_user_info = graphene.Field(UserDataType)

    me = graphene.Field(UserType)

    """Special schema use for add database and create fake database in remote server"""
    add_database = graphene.Boolean()
    create_fake_data = graphene.Boolean()

    def resolve_add_database(self, info):
        if info.context.user.is_superuser:
            from api.utils.add_database import add
            add("vietnam.json")
            return True
        return False

    def resolve_create_fake_data(self, info):
        # if info.context.user.is_superuser:
        try:
            from rcs.code.create_fake_data import create_fake_data
            create_fake_data()
            return True
        except Exception as e:
            print("except: ", e)
            return False
    """End special schema"""

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

    def resolve_all_cities(root, info, limit=0):
        if limit:
            return City.objects.all()[:limit]
        return City.objects.all()

    def resolve_get_city_by_id(root, info, id):
        return City.objects.get(id=id)

    def resolve_get_city_by_name(root, info, name):
        return City.objects.get(name=name)

    def resolve_all_attractions(root, info, limit=0):
        user = info.context.user
        if user.is_anonymous:
            listrcs = RCSAttraction(-1)
        else:
            listrcs = RCSAttraction(user.id)
        ret = [Attraction.objects.get(
            id=i) for i in listrcs] + list(Attraction.objects.filter(~Q(id__in=listrcs)))
        if limit:
            return ret[:limit]
        return ret

    def resolve_get_attraction_by_id(root, info, id):
        return Attraction.objects.get(id=id)

    def resolve_get_attraction_by_name(root, info, name):
        return Attraction.objects.get(name=name)

    def resolve_all_restaurants(root, info, limit=0):
        user = info.context.user
        if user.is_anonymous:
            listrcs = RCSRestaurant(-1)
        else:
            listrcs = RCSRestaurant(user.id)
        ret = [Restaurant.objects.get(
            id=i) for i in listrcs] + list(Restaurant.objects.filter(~Q(id__in=listrcs)))
        if limit:
            return ret[:limit]
        return ret

    def resolve_get_restaurant_by_id(root, info, id):
        return Restaurant.objects.get(id=id)

    def resolve_get_restaurant_by_name(root, info, name):
        return Restaurant.objects.get(name=name)

    def resolve_all_stays(root, info, limit=0):
        user = info.context.user
        if user.is_anonymous:
            listrcs = RCSStay(-1)
        else:
            listrcs = RCSStay(user.id)
        ret = [Stay.objects.get(id=i) for i in listrcs] + \
            list(Stay.objects.filter(~Q(id__in=listrcs)))
        if limit:
            return ret[:limit]
        return ret

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

    def resolve_get_review_nation(root, info, item_id):
        return Nation_Review.objects.filter(item_id=item_id)

    def resolve_get_review_city(root, info, item_id):
        return City_Review.objects.filter(item_id=item_id)

    def resolve_get_review_attraction(root, info, item_id):
        return Attraction_Review.objects.filter(item_id=item_id)

    def resolve_get_review_restaurant(root, info, item_id):
        return Restaurant_Review.objects.filter(item_id=item_id)

    def resolve_get_review_stay(root, info, itemid):
        return Stay_Review.objects.filter(item_id=itemid)

    def resolve_get_user_info(root, info):
        if info.context.user.is_authenticated:
            return UserData.objects.get(user=info.context.user)
        return None


class CreateBlog(graphene.Mutation):
    class Arguments:
        title = graphene.String(required=True)
        content = graphene.String(required=True)

    blog = graphene.Field(BlogType)

    @classmethod
    def mutate(cls, root, info, title, content):
        if info.context.user.is_anonymous:
            return None

        blog = Blog()
        blog.user = info.context.user
        blog.title = title
        blog.content = content
        blog.save()
        return CreateBlog(blog=blog)


class UpdateBlog(graphene.Mutation):
    class Arguments:
        id = graphene.ID(required=True)
        title = graphene.String(required=True)
        content = graphene.String(required=True)

    blog = graphene.Field(BlogType)

    @classmethod
    def mutate(cls, root, info, id, title, content):
        if not info.context.user.is_authenticated:
            return
        blog = Blog.objects.get(id=id, user=info.context.user)
        blog.title = title
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


class ReviewNation(graphene.Mutation):
    class Arguments:
        id = graphene.ID(required=True)
        point = graphene.Int(required=True)
        review = graphene.String(required=True)

    reviews = graphene.Field(Nation_ReviewType)

    @classmethod
    def mutate(cls, root, info, id, point, review):
        if not info.context.user.is_authenticated:
            return

        try:
            reviews = Nation_Review.objects.filter(
                user=info.context.user, item=id)[0]
            reviews.text = review
            old_point = reviews.point
            reviews.point = point

            item = Nation.objects.get(id=id)
            item.rating_score = (
                item.rating_score * item.number_voting - old_point + point
            ) / item.number_voting
        except:
            reviews = Nation_Review()
            reviews.item = Nation.objects.get(id=id)
            reviews.user = info.context.user
            reviews.text = review
            reviews.point = point

            item = Nation.objects.get(id=id)
            item.rating_score = (item.rating_score * item.number_voting + point) / (
                item.number_voting + 1
            )
            item.number_voting = item.number_voting + 1
        finally:
            reviews.save()
            item.save()

        return ReviewNation(reviews=reviews)


class ReviewCity(graphene.Mutation):
    class Arguments:
        id = graphene.ID(required=True)
        point = graphene.Int(required=True)
        review = graphene.String(required=True)

    reviews = graphene.Field(City_ReviewType)

    @classmethod
    def mutate(cls, root, info, id, point, review):
        if not info.context.user.is_authenticated:
            return

        try:
            reviews = City_Review.objects.filter(
                user=info.context.user, item=id)[0]
            reviews.text = review
            old_point = reviews.point
            reviews.point = point

            item = City.objects.get(id=id)
            item.rating_score = (
                item.rating_score * item.number_voting - old_point + point
            ) / item.number_voting
        except:
            reviews = City_Review()
            reviews.item = City.objects.get(id=id)
            reviews.user = info.context.user
            reviews.text = review
            reviews.point = point

            item = City.objects.get(id=id)
            item.rating_score = (item.rating_score * item.number_voting + point) / (
                item.number_voting + 1
            )
            item.number_voting = item.number_voting + 1
        finally:
            reviews.save()
            item.save()

        return ReviewCity(reviews=reviews)


class ReviewAttraction(graphene.Mutation):
    class Arguments:
        id = graphene.ID(required=True)
        point = graphene.Int(required=True)
        review = graphene.String(required=True)

    reviews = graphene.Field(Attraction_ReviewType)

    @classmethod
    def mutate(cls, root, info, id, point, review):
        if info.context.user.is_anonymous:
            return

        try:
            reviews = Attraction_Review.objects.filter(user=info.context.user, item=id)[
                0
            ]
            reviews.text = review
            old_point = reviews.point
            reviews.point = point

            item = Attraction.objects.get(id=id)
            item.rating_score = (
                item.rating_score * item.number_voting - old_point + point
            ) / item.number_voting
        except:
            reviews = Attraction_Review()
            reviews.item = Attraction.objects.get(id=id)
            reviews.user = info.context.user
            reviews.text = review
            reviews.point = point

            item = Attraction.objects.get(id=id)
            item.rating_score = (item.rating_score * item.number_voting + point) / (
                item.number_voting + 1
            )
            item.number_voting = item.number_voting + 1
        finally:
            reviews.save()
            item.save()

        return ReviewAttraction(reviews=reviews)


class ReviewRestaurant(graphene.Mutation):
    class Arguments:
        id = graphene.ID(required=True)
        point = graphene.Int(required=True)
        review = graphene.String(required=True)

    reviews = graphene.Field(Restaurant_ReviewType)

    @classmethod
    def mutate(cls, root, info, id, point, review):
        if not info.context.user.is_authenticated:
            return

        try:
            reviews = Restaurant_Review.objects.filter(user=info.context.user, item=id)[
                0
            ]
            reviews.text = review
            old_point = reviews.point
            reviews.point = point

            item = Restaurant.objects.get(id=id)
            item.rating_score = (
                item.rating_score * item.number_voting - old_point + point
            ) / item.number_voting
        except:
            reviews = Restaurant_Review()
            reviews.item = Restaurant.objects.get(id=id)
            reviews.user = info.context.user
            reviews.text = review
            reviews.point = point

            item = Restaurant.objects.get(id=id)
            item.rating_score = (item.rating_score * item.number_voting + point) / (
                item.number_voting + 1
            )
            item.number_voting = item.number_voting + 1
        finally:
            reviews.save()
            item.save()

        return ReviewRestaurant(reviews=reviews)


class ReviewStay(graphene.Mutation):
    class Arguments:
        id = graphene.ID(required=True)
        point = graphene.Int(required=True)
        review = graphene.String(required=True)

    reviews = graphene.Field(Stay_ReviewType)

    @classmethod
    def mutate(cls, root, info, id, point, review):
        if not info.context.user.is_authenticated:
            return

        try:
            reviews = Stay_Review.objects.filter(
                user=info.context.user, item=id)[0]
            reviews.text = review
            old_point = reviews.point
            reviews.point = point

            item = Stay.objects.get(id=id)
            item.rating_score = (
                item.rating_score * item.number_voting - old_point + point
            ) / item.number_voting
        except:
            reviews = Stay_Review()
            reviews.item = Stay.objects.get(id=id)
            reviews.user = info.context.user
            reviews.text = review
            reviews.point = point

            item = Stay.objects.get(id=id)
            item.rating_score = (item.rating_score * item.number_voting + point) / (
                item.number_voting + 1
            )
            item.number_voting = item.number_voting + 1
        finally:
            reviews.save()
            item.save()

        return ReviewStay(reviews=reviews)


class ReviewBlog(graphene.Mutation):
    class Arguments:
        id = graphene.ID(required=True)
        point = graphene.Int(required=True)
        review = graphene.String(required=True)

    reviews = graphene.Field(Blog_ReviewType)

    @classmethod
    def mutate(cls, root, info, id, point, review):
        if not info.context.user.is_authenticated:
            return
        try:
            reviews = Blog_Review.objects.filter(
                user=info.context.user, item=id)[0]
            reviews.text = review
            old_point = reviews.point
            reviews.point = point

            item = Blog.objects.get(id=id)
            item.rating_score = (
                item.rating_score * item.number_voting - old_point + point
            ) / item.number_voting
        except:
            reviews = Blog_Review()
            reviews.item = Blog.objects.get(id=id)
            reviews.user = info.context.user
            reviews.text = review
            reviews.point = point

            item = Blog.objects.get(id=id)
            item.rating_score = (item.rating_score * item.number_voting + point) / (
                item.number_voting + 1
            )
            item.number_voting = item.number_voting + 1
        finally:
            reviews.save()
            item.save()

        return ReviewBlog(reviews=reviews)


class Mutation(graphene.ObjectType):
    token_auth = graphql_jwt.ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.Verify.Field()
    refresh_token = graphql_jwt.Refresh.Field()
    revoke_token = graphql_jwt.Revoke.Field()

    create_blog = CreateBlog.Field()
    update_blog = UpdateBlog.Field()
    update_userdata = UpdateUserData.Field()

    review_nation = ReviewNation.Field()
    review_city = ReviewCity.Field()
    review_attraction = ReviewAttraction.Field()
    review_restaurant = ReviewRestaurant.Field()
    review_stay = ReviewStay.Field()
    review_blog = ReviewBlog.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
