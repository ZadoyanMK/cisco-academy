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
docker-compose build && docker-compose up
```

And in other console
1. 
```
docker-compose -f prod.yaml run app python manage.py migrate
```
2. 
```
docker-compose -f prod.yaml run app python manage.py createsuperuser
```
3. 
```
docker-compose -f prod.yaml run app python manage.py collectstatic
```