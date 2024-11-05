import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../features/dataSlice';
import { RootState, AppDispatch } from '../store';  // Import the correct types

const DataFetcher: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();  // Use AppDispatch type
  const { data, status, error } = useSelector((state: RootState) => state.data);

  useEffect(() => {
    dispatch(fetchRecipes());  // Now dispatch is properly typed
  }, [dispatch]);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'failed') {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {data.map((recipe) => (
          <li key={recipe.id}>
            <h3>{recipe.title}</h3>
            <img src={recipe.image} alt={recipe.title} />
            <p>{recipe.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetcher;
