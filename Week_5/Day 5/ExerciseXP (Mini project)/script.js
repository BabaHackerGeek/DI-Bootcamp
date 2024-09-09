// Array of robot objects with updated data
const robots = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        image: 'https://robohash.org/1?200x200'
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        image: 'https://robohash.org/2?200x200'
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        image: 'https://robohash.org/3?200x200'
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        image: 'https://robohash.org/4?200x200'
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        image: 'https://robohash.org/5?200x200'
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        image: 'https://robohash.org/6?200x200'
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        image: 'https://robohash.org/7?200x200'
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        image: 'https://robohash.org/8?200x200'
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        image: 'https://robohash.org/9?200x200'
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        image: 'https://robohash.org/10?200x200'
    }
];

// Function to generate robot cards
function generateRobotCards(robots) {
    const container = document.getElementById('robot-cards-container');
    container.innerHTML = ''; // Clear any existing content

    robots.forEach(robot => {
        // Create card element
        const card = document.createElement('div');
        card.className = 'card';

        // Create and append image element
        const img = document.createElement('img');
        img.src = robot.image;
        img.alt = `${robot.name}`;
        card.appendChild(img);

        // Create and append name element
        const name = document.createElement('h3');
        name.textContent = robot.name;
        card.appendChild(name);

        // Create and append email element
        const email = document.createElement('p');
        email.textContent = robot.email;
        card.appendChild(email);

        // Append the card to the container
        container.appendChild(card);
    });
}

// Function to filter robot cards based on the search input
function filterRobots() {
    const searchBox = document.getElementById('search-box');
    const searchTerm = searchBox.value.toLowerCase();
    const filteredRobots = robots.filter(robot => 
        robot.name.toLowerCase().includes(searchTerm)
    );
    generateRobotCards(filteredRobots);
}

// Add event listener to search box
document.getElementById('search-box').addEventListener('input', filterRobots);

// Initial display of all robot cards
generateRobotCards(robots);
