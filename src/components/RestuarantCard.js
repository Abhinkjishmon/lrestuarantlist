import React from 'react';
import Card from 'react-bootstrap/Card';

const RestuarantCard = ({restaurant}) => {
    console.log(restaurant);
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={restaurant.photograph} />
      <Card.Body>
        <Card.Title>{restaurant.name}</Card.Title>
        <Card.Text>
          <p>Cuisine{restaurant.cuisine_type}</p>
        </Card.Text>
        <Card.Text>
          <p>{restaurant.neighborhood}</p>
        </Card.Text>
      </Card.Body>
    </Card>

  )
}

export default RestuarantCard