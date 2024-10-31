import axios from 'axios';

export const fetchData = async <T>(url: string): Promise<T> => {
  const response = await axios.get(url, {
    headers: {
      'x-rapidapi-key': '35dd425541msh6257981300c85f0p1162c3jsn2b4ab03fb414',
      'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    },
  });
  return response.data;
};
