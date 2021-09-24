import graphene
import home.schema


class Query(home.schema.Query, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query)
