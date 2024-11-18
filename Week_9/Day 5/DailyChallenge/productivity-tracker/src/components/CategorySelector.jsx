import React from 'react';
import { useSelector } from 'react-redux';

const CategorySelector = ({ onSelect }) => {
  const categories = useSelector(state => state.categories.categories);

  return (
    <select onChange={e => onSelect(Number(e.target.value))}>
      <option value="">Select a category</option>
      {categories.map(category => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
    </select>
  );
};

export default CategorySelector;
