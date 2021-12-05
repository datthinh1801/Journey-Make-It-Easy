# Journey-Make-It-Easy

## Development
### Postgresql
username: `postgres`
password: `1234`

### Vue
- Install depencies:  
> The following commands need to be executed under `home/frontend`.  

```
npm install
```

- Start the development server:
```
npm run serve
```

### Django
- Start the development server:
```
python manage.py runserver
```

## Deployment
- Build the VueJS app for production deployment:
```
npm run build
```

- Collect static files built from VueJS app for Django:
```
python manage.py collectstatic
```

## Start the production application
```
python manange.py runserver
```

## Project initialization
- Install Python dependencies in a virtual environment:
```
python3 -m venv env
pip install -r requirements.txt
```

- Create a database named **Journey-Make-It-Easy**.
- Make and migrate migrations:
```
python3 manage.py makemigrations
python3 manage.py migrate
```

- Add initial data to the database for UI rendering.
```
# api/utils
python3 add_database.py vietnam.json
```

# RCS INIT

1) In the first time run, change INIT = 1 in rcs.py and run python manage.py runserver
2)  send a post request to graphql
```graphql
{
    createFakeData
}
```
3) stop server, change INIT = 0 in rcs.py and run again