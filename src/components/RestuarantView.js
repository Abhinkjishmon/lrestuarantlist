import React, { useEffect, useState } from 'react';
import { Col, Row, Image, ListGroup, Button, Modal } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


const RestuarantView = () => {
  const [restaurants, setRestaurants] = useState([])
  const params = useParams()
  console.log(params.id);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const fetchData = async () => {
    const res = await fetch('/restuarants.json')
    res.json().then((data) => {
      setRestaurants(data.restaurants)
    })
  }
  console.log(restaurants);
  useEffect(() => {
    fetchData()
  }, [])
  const restaurant = restaurants.find(item => (item.id == params.id))
  console.log(restaurant);
  return (
    <>
      {
        restaurant ? (
          <Row className='p-5'>
            <Col md={3}>
              <Image src={restaurant.photograph} alt={restaurant.name} fluid></Image>
            </Col>
            <Col md={8}>
              <ListGroup>
                <ListGroup.Item>
                  <h2>{restaurant.name}</h2>
                  <p>{restaurant.neighborhood}</p>
                </ListGroup.Item>
                <ListGroup.Item><p>Cuisine: {restaurant.cuisine_type}</p></ListGroup.Item>
                <ListGroup.Item><p>Adress: {restaurant.address}</p></ListGroup.Item>
                <ListGroup.Item>
                  <Button onClick={handleShow}>
                     Show More
                  </Button>
                </ListGroup.Item>
              </ListGroup>

            </Col>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      <ListGroup.Item>Monday: {restaurant.operating_hours.Monday}</ListGroup.Item>
      <ListGroup.Item>Tuesday: {restaurant.operating_hours.Tuesday}</ListGroup.Item>
      <ListGroup.Item>Wednesday: {restaurant.operating_hours.Wednesday}</ListGroup.Item>
      <ListGroup.Item>Thursday: {restaurant.operating_hours.Thursday}</ListGroup.Item>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
          </Row>
        ) : 'Nothing to display'
      }
    </>
  )
}

export default RestuarantView