# Generated by Django 3.2.7 on 2021-11-05 10:09

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("api", "0005_alter_stay_image_item"),
    ]

    operations = [
        migrations.CreateModel(
            name="Blog",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("title", models.TextField()),
                ("content", models.TextField()),
                (
                    "user",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="blogs",
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
        ),
        migrations.RenameField(
            model_name="attraction_voting",
            old_name="item_vote",
            new_name="item",
        ),
        migrations.RenameField(
            model_name="city_voting",
            old_name="item_vote",
            new_name="item",
        ),
        migrations.RenameField(
            model_name="nation_voting",
            old_name="item_vote",
            new_name="item",
        ),
        migrations.RenameField(
            model_name="restaurant_voting",
            old_name="item_vote",
            new_name="item",
        ),
        migrations.RenameField(
            model_name="stay_voting",
            old_name="item_vote",
            new_name="item",
        ),
        migrations.RemoveField(
            model_name="restaurant",
            name="cuisines",
        ),
        migrations.RemoveField(
            model_name="restaurant",
            name="features",
        ),
        migrations.RemoveField(
            model_name="restaurant",
            name="meals",
        ),
        migrations.RemoveField(
            model_name="restaurant",
            name="special_diets",
        ),
        migrations.RemoveField(
            model_name="stay",
            name="property_amenities",
        ),
        migrations.RemoveField(
            model_name="stay",
            name="room_features",
        ),
        migrations.RemoveField(
            model_name="stay",
            name="room_types",
        ),
        migrations.AddField(
            model_name="attraction",
            name="ggmap",
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name="city",
            name="info",
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name="restaurant",
            name="ggmap",
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name="stay",
            name="ggmap",
            field=models.TextField(blank=True),
        ),
        migrations.CreateModel(
            name="Stay_Review",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("review", models.TextField()),
                (
                    "item",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="reviews",
                        to="api.stay",
                    ),
                ),
                (
                    "user",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="stay_reviews",
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Special_Diet",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("value", models.TextField()),
                (
                    "restaurant",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="special_diets",
                        to="api.restaurant",
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Room_Type",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("value", models.TextField()),
                (
                    "stay",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="room_types",
                        to="api.stay",
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Room_Feature",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("value", models.TextField()),
                (
                    "stay",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="room_features",
                        to="api.stay",
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Restaurant_Review",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("review", models.TextField()),
                (
                    "item",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="reviews",
                        to="api.restaurant",
                    ),
                ),
                (
                    "user",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="restaurant_reviews",
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Restaurant_Feature",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("value", models.TextField()),
                (
                    "restaurant",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="features",
                        to="api.restaurant",
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Property_Amenitie",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("value", models.TextField()),
                (
                    "stay",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="property_amenities",
                        to="api.stay",
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Nation_Review",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("review", models.TextField()),
                (
                    "item",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="reviews",
                        to="api.nation",
                    ),
                ),
                (
                    "user",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="nation_reviews",
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Meal",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("value", models.TextField()),
                (
                    "restaurant",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="meals",
                        to="api.restaurant",
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Cuisine",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("value", models.TextField()),
                (
                    "restaurant",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="cuisines",
                        to="api.restaurant",
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="City_Review",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("review", models.TextField()),
                (
                    "item",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="reviews",
                        to="api.city",
                    ),
                ),
                (
                    "user",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="city_reviews",
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="BLog_Voting",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("point", models.IntegerField()),
                (
                    "item",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="votings",
                        to="api.blog",
                    ),
                ),
                (
                    "user",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="blog_votings",
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Blog_Review",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("review", models.TextField()),
                (
                    "item",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="reviews",
                        to="api.blog",
                    ),
                ),
                (
                    "user",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="blog_reviews",
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="BLog_Image",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("link", models.TextField()),
                (
                    "item",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="images",
                        to="api.blog",
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Attraction_Review",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("review", models.TextField()),
                (
                    "item",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="reviews",
                        to="api.attraction",
                    ),
                ),
                (
                    "user",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="attraction_reviews",
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
        ),
    ]
