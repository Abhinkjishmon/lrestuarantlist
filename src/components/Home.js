import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import RestuarantCard from './RestuarantCard';
import './Home.css';
import { RestuarantsList } from '../Actions/homeAction';
import { useDispatch, useSelector } from 'react-redux';



const Home = () => {
    //state to hold data from api call
    //const [restaurants, setRestuarants] = useState([])

    //function to get data from api 
    // const fetchData = async () => {
    //     const result = await fetch('/restuarants.json')
    //     result.json().then(data => {
    //         setRestuarants(data.restaurants);
    //     });
    // }
    // console.log(restaurants);

    const dispatch = useDispatch()
    useEffect(() => {
        // fetchData()
        dispatch(RestuarantsList())
    }, [])

    const {restuarants} = useSelector(state=>state.restuarantReducer)
    console.log(restuarants);

    return (
        <Row>
            {
                restuarants.map(item => (
                    <Col className='py-3' sm={6} md={4} lg={3}>
                        <RestuarantCard restaurant={item}/>
                    </Col>
                ))
            }
        </Row>
    )
}

export default Home


