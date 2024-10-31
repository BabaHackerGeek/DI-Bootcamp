// src/components/DataFetcher.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../features/dataSlice';
import { RootState } from '../store';

const DataFetcher: React.FC = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state: RootState) => state.data);

  useEffect(() => {
    dispatch(fetchRecipes() as any); // Temporarily cast to `any` if necessary
  }, [dispatch]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <ul>
      {data.map((recipe) => (
        <li key={recipe.id}>
          <img src={recipe.image} alt={recipe.title} />
          <p>{recipe.title}</p>
        </li>
      ))}
    </ul>
  );
};

export default DataFetcher;
