import psycopg2
from datetime import timezone, datetime, timedelta
from random import randrange

def add_n_user(cursor, n):
    date_format = '%Y-%m-%d %H:%M:%S'
    timestamp = datetime.strftime(datetime.now(), date_format)
    for i in range(n):
        query_str = (
            "INSERT INTO auth_user (username, password, is_superuser, first_name, last_name, email, is_staff, is_active, date_joined) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)"
        )

        # user create by this cannot login using password
        item_insert = ('fake_user_' + str(i), '1', False, '', '', '', True, True, timestamp)
        cursor.execute(query_str, item_insert)

    cursor.execute('SELECT max(id) FROM auth_user')
    return int(cursor.fetchall()[0][0])

def fake_review_attraction(cursor, min_id, max_id, num):
    cursor.execute('SELECT id FROM api_attraction')
    id = [int(i[0]) for i in cursor.fetchall()]

    s = set()

    for i in range(num):
        while True:
            user_id = randrange(min_id, max_id)
            item_id = id[randrange(len(id))]
            if str(user_id) + '-' + str(item_id) not in s:
                s.add(str(user_id) + '-' + str(item_id))
                break

        query_str = (
            "INSERT INTO api_attraction_review (text, item_id, user_id, point) VALUES (%s, %s, %s, %s)"
        )
        item_insert = ('Fake comment from user ' + str(user_id), item_id, user_id, randrange(1, 5))
        cursor.execute(query_str, item_insert)

def fake_review_restaurant(cursor, min_id, max_id, num):
    cursor.execute('SELECT id FROM api_restaurant')
    id = [int(i[0]) for i in cursor.fetchall()]

    s = set()

    for i in range(num):
        while True:
            user_id = randrange(min_id, max_id)
            item_id = id[randrange(len(id))]
            if str(user_id) + '-' + str(item_id) not in s:
                s.add(str(user_id) + '-' + str(item_id))
                break

        query_str = (
            "INSERT INTO api_restaurant_review (text, item_id, user_id, point) VALUES (%s, %s, %s, %s)"
        )
        item_insert = ('Fake comment from user ' + str(user_id), item_id, user_id, randrange(1, 5))
        cursor.execute(query_str, item_insert)

def fake_review_stay(cursor, min_id, max_id, num):
    cursor.execute('SELECT id FROM api_stay')
    id = [int(i[0]) for i in cursor.fetchall()]

    s = set()

    for i in range(num):
        while True:
            user_id = randrange(min_id, max_id)
            item_id = id[randrange(len(id))]
            if str(user_id) + '-' + str(item_id) not in s:
                s.add(str(user_id) + '-' + str(item_id))
                break

        query_str = (
            "INSERT INTO api_stay_review (text, item_id, user_id, point) VALUES (%s, %s, %s, %s)"
        )
        item_insert = ('Fake comment from user ' + str(user_id), item_id, user_id, randrange(1, 5))
        cursor.execute(query_str, item_insert)

if __name__ == "__main__":
    conn = psycopg2.connect(
        database="Journey-Make-It-Easy",
        user="postgres",
        password="1234",
        host="127.0.0.1",
        port="5432",
    )
    conn.autocommit = True
    cursor = conn.cursor()

    n, c = 500, 8000

    max_id = add_n_user(cursor, n)

    fake_review_attraction(cursor, max_id - n + 1, max_id, c)
    fake_review_restaurant(cursor, max_id - n + 1, max_id, c)
    fake_review_stay(cursor, max_id - n + 1, max_id, c)

    conn.commit()

    cursor.close()
    conn.close()
