import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import RestuarantCard from './RestuarantCard';
import './Home.css'


const Home = () => {
    //state to hold data from api call
    const [restaurants, setRestuarants] = useState([])

    //function to get data from api 
    const fetchData = async () => {
        const result = await fetch('/restuarants.json')
        result.json().then(data => {
            setRestuarants(data.restaurants);
        });
    }
    console.log(restaurants);
    useEffect(() => {
        fetchData()
    }, [])


    return (
        <Row>
            {
                restaurants.map(item => (
                    <Col className='py-3' sm={6} md={4} lg={3}>
                        <RestuarantCard restaurant={item}/>
                    </Col>
                ))
            }
        </Row>
    )
}

export default Home


