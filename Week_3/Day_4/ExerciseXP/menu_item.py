from dotenv import load_dotenv
import os
import psycopg2

# Load environment variables from .env file
load_dotenv()

class MenuItem:
    def __init__(self, name, price):
        self.name = name  # The name of the menu item
        self.price = price  # The price of the menu item

    # Method to save the menu item to the database
    def save(self):
        conn = psycopg2.connect(
            dbname=os.getenv('DB_NAME'),
            user=os.getenv('DB_USER'),
            password=os.getenv('DB_PASSWORD')
        )
        cursor = conn.cursor()
        cursor.execute("INSERT INTO Menu_Items (item_name, item_price) VALUES (%s, %s)", (self.name, self.price))
        conn.commit()
        cursor.close()
        conn.close()

    # Method to delete the menu item from the database
    def delete(self):
        conn = psycopg2.connect(
            dbname=os.getenv('DB_NAME'),
            user=os.getenv('DB_USER'),
            password=os.getenv('DB_PASSWORD')
        )
        cursor = conn.cursor()
        cursor.execute("DELETE FROM Menu_Items WHERE item_name = %s", (self.name,))
        conn.commit()
        cursor.close()
        conn.close()

    # Method to update the menu item in the database
    def update(self, new_name, new_price):
        conn = psycopg2.connect(
            dbname=os.getenv('DB_NAME'),
            user=os.getenv('DB_USER'),
            password=os.getenv('DB_PASSWORD')
        )
        cursor = conn.cursor()
        cursor.execute("UPDATE Menu_Items SET item_name = %s, item_price = %s WHERE item_name = %s", 
                       (new_name, new_price, self.name))
        conn.commit()
        cursor.close()
        conn.close()
