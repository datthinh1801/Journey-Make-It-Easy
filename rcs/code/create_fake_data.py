import psycopg2

def add_500_user(cursor):
    pass

def fake_review_attraction(cursor):
    pass

def fake_review_restaurant(cursor):
    pass

def fake_review_stay(cursor):
    pass

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

    add_500_user(cursor)
    fake_review_attraction(cursor)
    fake_review_restaurant(cursor)
    fake_review_stay(cursor)

    conn.commit()

    cursor.close()
    conn.close()
