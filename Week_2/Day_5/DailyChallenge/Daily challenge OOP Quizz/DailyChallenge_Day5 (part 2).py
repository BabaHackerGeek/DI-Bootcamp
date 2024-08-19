import random

# Step 1: Create a Card class to represent individual cards
class Card:
    def __init__(self, suit, value):
        # Initialize the suit and value of the card
        self.suit = suit
        self.value = value

    def __repr__(self):
        # Represent the card in a readable format, e.g., "A of Hearts"
        return f"{self.value} of {self.suit}"

# Step 2: Create a Deck class to represent a deck of cards
class Deck:
    def __init__(self):
        # Initialize the deck with 52 cards
        suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
        values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
        self.cards = [Card(suit, value) for suit in suits for value in values]

    def shuffle(self):
        # Shuffle the deck to rearrange the cards randomly
        random.shuffle(self.cards)

    def deal(self):
        # Deal a single card from the deck and remove it
        if len(self.cards) == 0:
            return "No cards left in the deck"
        return self.cards.pop()

# Step 3: Test the Deck and Card functionality
if __name__ == "__main__":
    # Create a new deck
    deck = Deck()
    
    # Shuffle the deck
    deck.shuffle()
    
    # Deal 5 cards
    for _ in range(5):
        card = deck.deal()
        print(card)
    
    # Print the number of remaining cards in the deck
    print(f"Cards left in deck: {len(deck.cards)}")
