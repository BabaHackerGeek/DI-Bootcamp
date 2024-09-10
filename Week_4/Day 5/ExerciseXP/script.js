// Get the color input and container elements
const colorInput = document.getElementById('color');
const container = document.querySelector('.container');

// Initialize painting mode
let isPainting = false;

// Function to create squares
function createSquares() {
    for (let i = 0; i < 100; i++) { // 10x10 grid
        const square = document.createElement('div');
        square.className = 'square';

        // Add mouse event listeners for painting
        square.addEventListener('mousedown', () => isPainting = true);
        square.addEventListener('mouseup', () => isPainting = false);
        square.addEventListener('mouseover', () => {
            if (isPainting) {
                square.style.backgroundColor = colorInput.value;
            }
        });

        container.appendChild(square);
    }
}

// Initialize the squares
createSquares();
