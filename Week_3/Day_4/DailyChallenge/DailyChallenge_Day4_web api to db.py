import os
import random
import requests
import psycopg2
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Database connection setup
def connect_db():
    return psycopg2.connect(
        dbname=os.getenv('DB_NAME'),
        user=os.getenv('DB_USER'),
        password=os.getenv('DB_PASSWORD')
    )

# Function to create the Countries table
def create_table():
    conn = connect_db()
    cursor = conn.cursor()
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS Countries (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            capital VARCHAR(100),
            flag TEXT,
            subregion VARCHAR(100),
            population BIGINT
        );
    """)
    conn.commit()
    cursor.close()
    conn.close()

# Function to fetch country data from the API
def fetch_countries_data():
    url = "https://restcountries.com/v3.1/all"
    response = requests.get(url)
    if response.status_code == 200:
        return response.json()
    else:
        raise Exception("Failed to fetch data from REST Countries API")

# Function to insert country data into the database
def insert_country_data(country):
    conn = connect_db()
    cursor = conn.cursor()
    cursor.execute(
        """
        INSERT INTO Countries (name, capital, flag, subregion, population)
        VALUES (%s, %s, %s, %s, %s)
        """,
        (country['name'], country['capital'], country['flag'], country['subregion'], country['population'])
    )
    conn.commit()
    cursor.close()
    conn.close()

# Main function to execute the process
def main():
    # Step 1: Create the Countries table
    create_table()

    # Step 2: Fetch data from API
    countries_data = fetch_countries_data()

    # Step 3: Select 10 random countries
    selected_countries = random.sample(countries_data, 10)

    # Step 4: Prepare and insert data into the database
    for country in selected_countries:
        country_info = {
            'name': country.get('name', {}).get('common', 'N/A'),
            'capital': country.get('capital', ['N/A'])[0] if 'capital' in country else 'N/A',
            'flag': country.get('flags', {}).get('png', 'N/A'),
            'subregion': country.get('subregion', 'N/A'),
            'population': country.get('population', 0)
        }
        insert_country_data(country_info)
        print(f"Inserted: {country_info['name']}")

if __name__ == "__main__":
    main()
