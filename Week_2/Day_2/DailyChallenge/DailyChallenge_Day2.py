# Daily Challenge: Pagination Class
# Instructions:
# 1. Create a class called Pagination to handle paginated content on a website. A pagination is used to divide
#    long lists of content into a series of pages.
#
# 2. The Pagination class should accept two parameters:
#    - items (default: None): A list of content items to paginate.
#    - pageSize (default: 10): The number of items to display per page.
#
# 3. The Pagination class should have the following methods:
#    - getVisibleItems(): This method returns a list of items that are visible on the current page.
#    - prevPage(): Moves to the previous page.
#    - nextPage(): Moves to the next page.
#    - firstPage(): Moves to the first page.
#    - lastPage(): Moves to the last page.
#    - goToPage(pageNum): Moves to a specific page number. If the page number is out of bounds, it goes to the closest valid page.
#
# 4. The Pagination class should have attributes for:
#    - totalPages: The total number of pages.
#    - currentPage: The current page number.
#
# 5. Ensure that the page-changing methods (prevPage, nextPage, firstPage, lastPage, goToPage) are chainable, so they can be called one after the other.
#
# 6. Handle cases where the pageSize or pageNum is given as a float by converting it to an integer.
#
# 7. Ensure that the goToPage method correctly handles page numbers that are out of bounds (too high or too low).

# Step 1: Define the Pagination class
class Pagination:
    def __init__(self, items=None, pageSize=10):
        # Initialize the items list and pageSize, ensuring pageSize is an integer
        self.items = items or []
        self.pageSize = int(pageSize)
        self.totalPages = max(1, -(-len(self.items) // self.pageSize))  # Calculate total pages
        self.currentPage = 1  # Start on the first page

    # Step 2: Implement getVisibleItems method
    def getVisibleItems(self):
        start_index = (self.currentPage - 1) * self.pageSize
        end_index = start_index + self.pageSize
        return self.items[start_index:end_index]

    # Step 3: Implement prevPage method
    def prevPage(self):
        self.currentPage = max(1, self.currentPage - 1)
        return self  # Chainable

    # Step 3: Implement nextPage method
    def nextPage(self):
        self.currentPage = min(self.totalPages, self.currentPage + 1)
        return self  # Chainable

    # Step 3: Implement firstPage method
    def firstPage(self):
        self.currentPage = 1
        return self  # Chainable

    # Step 3: Implement lastPage method
    def lastPage(self):
        self.currentPage = self.totalPages
        return self  # Chainable

    # Step 3: Implement goToPage method
    def goToPage(self, pageNum):
        pageNum = int(pageNum)  # Ensure pageNum is an integer
        if pageNum < 1:
            self.currentPage = 1
        elif pageNum > self.totalPages:
            self.currentPage = self.totalPages
        else:
            self.currentPage = pageNum
        return self  # Chainable

# Step 4: Test the Pagination class
alphabetList = list("abcdefghijklmnopqrstuvwxyz")

p = Pagination(alphabetList, 4)

# Get the visible items on the first page
print(p.getVisibleItems())  # Output: ["a", "b", "c", "d"]

# Move to the next page and get visible items
p.nextPage()
print(p.getVisibleItems())  # Output: ["e", "f", "g", "h"]

# Move to the last page and get visible items
p.lastPage()
print(p.getVisibleItems())  # Output: ["y", "z"]

# Chain methods to move pages
p.firstPage().nextPage().nextPage()
print(p.getVisibleItems())  # Output: ["i", "j", "k", "l"]

# Try to go to a page out of bounds
p.goToPage(10)
print(p.getVisibleItems())  # Output: ["y", "z"]

# Try to go to a negative page number
p.goToPage(-1)
print(p.getVisibleItems())  # Output: ["a", "b", "c", "d"]