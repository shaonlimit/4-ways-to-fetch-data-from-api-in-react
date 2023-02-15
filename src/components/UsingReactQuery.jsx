import React from 'react';
import { useQuery } from 'react-query';
import getQuote from './utilities/getQuote';

const UsingReactQuery = () => {
  const { data, isError, isLoading } = useQuery('fetchers', () => getQuote());
  if (isError) return <h1>Data is not loading now!</h1>;
  if (isLoading) return <h1>Data loading.....</h1>;
  return (
    <div className='using-react-query'>
      <h2>Using React-Query</h2>
      <hr />
      <h3>{data.author}</h3>
      <p>{data.content}</p>
      <p>Category: &nbsp;{data.tags}</p>
    </div>
  );
};

export default UsingReactQuery;
