# Generated by Django 2.1.7 on 2019-03-20 08:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, default='2018-09-12 00:00:00'),
            preserve_default=False,
        ),
    ]
