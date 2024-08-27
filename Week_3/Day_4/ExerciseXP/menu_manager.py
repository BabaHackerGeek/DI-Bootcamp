from dotenv import load_dotenv
import os
import psycopg2

# Load environment variables from .env file
load_dotenv()

class MenuManager:
    
    # Class method to get a menu item by name
    @classmethod
    def get_by_name(cls, name):
        conn = psycopg2.connect(
            dbname=os.getenv('DB_NAME'),
            user=os.getenv('DB_USER'),
            password=os.getenv('DB_PASSWORD')
        )
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM Menu_Items WHERE item_name = %s", (name,))
        item = cursor.fetchone()
        cursor.close()
        conn.close()
        if item:
            return item  # Return the item if found
        else:
            return None  # Return None if the item is not found

    # Class method to get all menu items
    @classmethod
    def all_items(cls):
        conn = psycopg2.connect(
            dbname=os.getenv('DB_NAME'),
            user=os.getenv('DB_USER'),
            password=os.getenv('DB_PASSWORD')
        )
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM Menu_Items")
        items = cursor.fetchall()
        cursor.close()
        conn.close()
        return items  # Return a list of all menu items
