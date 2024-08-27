from menu_item import MenuItem
from menu_manager import MenuManager

# Function to display the user menu and handle user input
def show_user_menu():
    while True:
        print("\nMenu:")
        print("V - View an Item")
        print("A - Add an Item")
        print("D - Delete an Item")
        print("U - Update an Item")
        print("S - Show the Menu")
        print("E - Exit")
        choice = input("Choose an option: ").upper()

        # Handle user's menu choice
        if choice == 'V':
            name = input("Enter the name of the item: ")
            item = MenuManager.get_by_name(name)
            if item:
                print(f"Item found: {item}")
            else:
                print("Item not found.")
        elif choice == 'A':
            add_item_to_menu()
        elif choice == 'D':
            remove_item_from_menu()
        elif choice == 'U':
            update_item_from_menu()
        elif choice == 'S':
            show_restaurant_menu()
        elif choice == 'E':
            show_restaurant_menu()
            print("Exiting...")
            break
        else:
            print("Invalid choice. Please choose again.")

# Function to add a new item to the menu
def add_item_to_menu():
    name = input("Enter the name of the item: ")
    price = int(input("Enter the price of the item: "))
    item = MenuItem(name, price)
    item.save()
    print(f"{name} was added successfully.")

# Function to remove an item from the menu
def remove_item_from_menu():
    name = input("Enter the name of the item to remove: ")
    item = MenuItem(name, 0)  # Price is irrelevant for deletion
    item.delete()
    print(f"{name} was deleted successfully.")

# Function to update an existing menu item
def update_item_from_menu():
    old_name = input("Enter the name of the item to update: ")
    new_name = input("Enter the new name: ")
    new_price = int(input("Enter the new price: "))
    item = MenuItem(old_name, 0)  # Old price is irrelevant
    item.update(new_name, new_price)
    print(f"{old_name} was updated successfully to {new_name}.")

# Function to display the entire restaurant menu
def show_restaurant_menu():
    items = MenuManager.all_items()
    if items:
        print("\nRestaurant Menu:")
        for item in items:
            print(f"{item[1]}: ${item[2]}")
    else:
        print("The menu is empty.")

# Main function to start the menu editor
if __name__ == "__main__":
    show_user_menu()
