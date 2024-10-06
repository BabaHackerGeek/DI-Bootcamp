import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Import useParams

const Search = () => {
  const { query } = useParams(); // Get the search query from the URL
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1); // Pagination

  useEffect(() => {
    const fetchSearchResults = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await axios.get(`https://api.pexels.com/v1/search`, {
          headers: {
            Authorization: process.env.REACT_APP_PEXELS_API_KEY // Use your API Key from .env
          },
          params: {
            query: query, // Get the query from useParams
            per_page: 30,
            page: page, // Pagination
          }
        });
        setImages(res.data.photos);
      } catch (err) {
        setError('Failed to load images. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [query, page]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <>
      <div className="gallery">
        {images.map((image) => (
          <div key={image.id} className="image-container">
            <img src={image.src.medium} alt={image.alt} className="gallery-image" />
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={() => setPage((prev) => (prev > 1 ? prev - 1 : 1))}>Previous</button>
        <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
      </div>
    </>
  );
};

export default Search;
