import React from 'react';
import { useParams } from 'react-router-dom';

const RestuarantView = () => {
    const params = useParams()
    console.log(params);
  return (
    <div>RestuarantView</div>
  )
}

export default RestuarantView