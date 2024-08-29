// Instructions:
// 1. Create an array of objects representing the planets in the solar system.
//    - Each object should include the name of the planet, the number of moons it has, and the color you want the planet to be.

// 2. For each planet in the array, create a <div> element that will represent the planet.
//    - Set the class of the <div> to "planet".
//    - Assign a specific background color based on the planet's color.

// 3. Append each planet <div> to the <section> in the HTML.
//    - Use the class "listPlanets" to target the section.

// 4. Bonus: For each planet, create and append moons as smaller <div> elements with the class "moon".
//    - Position the moons around their respective planet using random positions within the planet's div.

// Create an array of planet objects, each with a name, number of moons, and color
const planets = [
    { name: "Mercury", moons: 0, color: "gray" },
    { name: "Venus", moons: 0, color: "yellow" },
    { name: "Earth", moons: 1, color: "blue" },
    { name: "Mars", moons: 2, color: "red" },
    { name: "Jupiter", moons: 79, color: "orange" },
    { name: "Saturn", moons: 82, color: "goldenrod" },
    { name: "Uranus", moons: 27, color: "lightblue" },
    { name: "Neptune", moons: 14, color: "darkblue" }
];

// Select the <section> element where planets will be added
const section = document.querySelector(".listPlanets");

// Loop through each planet object
planets.forEach(planet => {
    // Create a div for each planet and assign the class 'planet'
    const planetDiv = document.createElement("div");
    planetDiv.classList.add("planet");

    // Set the background color of the planet
    planetDiv.style.backgroundColor = planet.color;

    // Optionally, add the planet's name as text inside the div
    planetDiv.textContent = planet.name;

    // Append the planet div to the section
    section.appendChild(planetDiv);

    // Create moons for the planet if it has any
    for (let i = 0; i < planet.moons; i++) {
        const moonDiv = document.createElement("div");
        moonDiv.classList.add("moon");

        // Position moons randomly around the planet
        moonDiv.style.left = `${Math.random() * 100}px`;
        moonDiv.style.top = `${Math.random() * 100}px`;

        // Append the moon div to the planet div
        planetDiv.appendChild(moonDiv);
    }
});
