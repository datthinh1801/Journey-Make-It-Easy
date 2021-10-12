# Generated by Django 3.2.7 on 2021-10-12 12:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='City',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField()),
                ('number_voting', models.TextField()),
                ('rating_score', models.FloatField()),
            ],
        ),
        migrations.CreateModel(
            name='GlobalId',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('note', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Voting',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('point', models.IntegerField()),
                ('item_vote', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.globalid')),
            ],
        ),
        migrations.CreateModel(
            name='Stay',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('about', models.TextField()),
                ('address', models.TextField()),
                ('phone', models.TextField()),
                ('email', models.TextField()),
                ('room_features', models.TextField()),
                ('room_types', models.TextField()),
                ('property_amenities', models.TextField()),
                ('number_voting', models.TextField()),
                ('rating_score', models.FloatField()),
                ('city_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.city')),
                ('global_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.globalid')),
            ],
        ),
        migrations.CreateModel(
            name='Restaurant',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('address', models.TextField()),
                ('open_time', models.TextField()),
                ('phone', models.TextField()),
                ('website', models.TextField()),
                ('cuisines', models.TextField()),
                ('meals', models.TextField()),
                ('special_diets', models.TextField()),
                ('price_range', models.TextField()),
                ('features', models.TextField()),
                ('number_voting', models.TextField()),
                ('rating_score', models.FloatField()),
                ('city_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.city')),
                ('global_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.globalid')),
            ],
        ),
        migrations.CreateModel(
            name='Nation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField()),
                ('number_voting', models.TextField()),
                ('rating_score', models.FloatField()),
                ('global_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.globalid')),
            ],
        ),
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('link', models.TextField()),
                ('item', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.globalid')),
            ],
        ),
        migrations.AddField(
            model_name='city',
            name='global_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.globalid'),
        ),
        migrations.AddField(
            model_name='city',
            name='nation_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.nation'),
        ),
        migrations.CreateModel(
            name='Attraction',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('about', models.TextField()),
                ('address', models.TextField()),
                ('admission_ticket', models.TextField(blank=True)),
                ('open_time', models.TextField(blank=True)),
                ('suggested_duration', models.TextField(blank=True)),
                ('number_voting', models.TextField()),
                ('rating_score', models.FloatField()),
                ('city_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.city')),
                ('global_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.globalid')),
            ],
        ),
    ]
