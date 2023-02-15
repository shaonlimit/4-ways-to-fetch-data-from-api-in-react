import React, { useEffect, useState } from 'react';

const UsingFetch = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const getData = async () => {
      const res = await fetch('https://api.quotable.io/random');
      const data = await res.json();
      setData(data);
    };
    getData();
  }, []);
  return (
    <div className='using-fetch'>
      <h2>Using Fetch</h2>
      <hr />
      <h3>{data?.author}</h3>
      <p>{data?.content}</p>
      <p>Category: &nbsp;{data?.tags}</p>
    </div>
  );
};

export default UsingFetch;
