# Instructions:
# The goal is to create a function that returns the amount of time it takes for a webpage to load.
# We will use the `requests` and `time` modules to accomplish this task.
# The function should send a request to a webpage and measure the time taken to receive a complete response.
# Finally, we will test the function with multiple websites such as Google, Ynet, and IMDb.

import requests
import time

# Step 1: Define a function to measure the loading time of a webpage
def get_loading_time(url):
    # Record the start time
    start_time = time.time()
    
    # Send a request to the webpage
    response = requests.get(url)
    
    # Record the end time
    end_time = time.time()
    
    # Calculate the loading time
    loading_time = end_time - start_time
    
    # Return the loading time and the status code of the response
    return loading_time, response.status_code

# Step 2: Test the function with multiple websites
if __name__ == "__main__":
    # List of websites to test
    websites = ["https://www.google.com", "https://www.ynet.co.il", "https://www.imdb.com"]
    
    # Loop through the list and measure the loading time for each website
    for website in websites:
        time_taken, status_code = get_loading_time(website)
        print(f"Website: {website}")
        print(f"Loading Time: {time_taken:.4f} seconds")
        print(f"Status Code: {status_code}\n")
