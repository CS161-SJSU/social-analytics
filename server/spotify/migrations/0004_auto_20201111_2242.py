# Generated by Django 3.0.3 on 2020-11-12 06:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('spotify', '0003_auto_20201110_2113'),
    ]

    operations = [
        migrations.AddField(
            model_name='spotifyuser',
            name='image',
            field=models.CharField(default='', max_length=2000),
        ),
        migrations.CreateModel(
            name='SpotifyRecentlyPlayed',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('song_title', models.CharField(default='', max_length=70)),
                ('artist_name', models.CharField(default='', max_length=70)),
                ('played_at', models.DateField()),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='spotify.SpotifyUser')),
            ],
        ),
    ]
