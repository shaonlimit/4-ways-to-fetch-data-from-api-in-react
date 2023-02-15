import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UsingAxios = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get('https://api.quotable.io/random');
      setData(res.data);
    };
    getData();
  }, []);
  return (
    <div className='using-axios'>
      <h2>Using Axios</h2>
      <hr />
      <h3>{data?.author}</h3>
      <p>{data?.content}</p>
      <p>Category: &nbsp;{data?.tags}</p>
    </div>
  );
};

export default UsingAxios;
