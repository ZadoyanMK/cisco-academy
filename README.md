# cisco-academy
cisco academy web app

### Additional

change credentionals in _config

remove all docker containers

```
docker-compose down --rmi all -v --remove-orphans
```

### Run project

```
docker-compose -f prod.yaml build && docker-compose -f prod.yaml up
```

And in other console

```
docker-compose -f prod.yaml run app python manage.py migrate && docker-compose -f prod.yaml run app python manage.py collectstatic && docker-compose -f prod.yaml run app python manage.py createsuperuser
```

for develop:
```
docker-compose run app python manage.py migrate && docker-compose run app python manage.py collectstatic && docker-compose run app python manage.py createsuperuser
```