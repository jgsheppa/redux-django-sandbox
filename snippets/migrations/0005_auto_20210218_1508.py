# Generated by Django 3.1.6 on 2021-02-18 15:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('snippets', '0004_auto_20210218_1505'),
    ]

    operations = [
        migrations.AlterField(
            model_name='guests',
            name='attending',
            field=models.BooleanField(default=False),
        ),
    ]
