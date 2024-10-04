import React, { useEffect, useState } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    }, 3000);
  }, []);

  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <strong>Name:</strong> {item.name} <br />
              <strong>Email:</strong> {item.email} <br />
              <strong>Phone:</strong> {item.phone}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DataFetcher;
