import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
    selectBooks,
    selectHorrorBooks,
    selectFantasyBooks,
    selectScienceFictionBooks,
} from './bookSelector'; // Import from the separate file

const App = () => {
    const [genre, setGenre] = useState('All'); // State to store the selected genre

    // Use the appropriate selector based on the selected genre
    const books = useSelector((state) => {
        if (genre === 'Horror') return selectHorrorBooks(state);
        if (genre === 'Fantasy') return selectFantasyBooks(state);
        if (genre === 'Science Fiction') return selectScienceFictionBooks(state);
        return selectBooks(state);
    });

    return (
        <div>
            <h1>Book Inventory</h1>
            {/* Dropdown to select the genre */}
            <select onChange={(e) => setGenre(e.target.value)} value={genre}>
                <option value="All">All</option>
                <option value="Horror">Horror</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Science Fiction">Science Fiction</option>
            </select>
            {/* Display the filtered list of books */}
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        <strong>{book.title}</strong> by {book.author} ({book.genre})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
