import React from 'react';
import useSWR from 'swr';

const fetcher = async (...args) => {
  const res = await fetch(...args);
  const data = res.json();
  return data;
};
const UsingSWR = () => {
  const { data, isLoading, error } = useSWR(
    'https://api.quotable.io/random',
    fetcher
  );
  if (error) return <h1>Data is unavailable now!</h1>;
  if (isLoading) return <h1>Data Loading...</h1>;
  return (
    <div className='using-swr'>
      <h2>Using SWR</h2>
      <hr />
      <h3>{data.author}</h3>
      <p>{data.content}</p>
      <p>Category: &nbsp;{data.tags}</p>
    </div>
  );
};

export default UsingSWR;
