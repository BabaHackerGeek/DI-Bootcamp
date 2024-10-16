import React, { useEffect, useState } from 'react';

interface DataItem {
  id: number;
  title: string;
}

const DataFetcher: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setData(data.slice(0, 5)); // Get first 5 items
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Fetched Data</h2>
      {loading ? <p>Loading...</p> : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DataFetcher;
