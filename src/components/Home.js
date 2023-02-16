import React, { useState, useEffect } from 'react';


const Home = () => {
    //state to hold data from api call
    const [restaurants, setRestuarants] = useState([])

    //function to get data from api 
    const fetchData = async () => {
        const result = await fetch('/restuarants.json')
        result.json().then(data=>{
            setRestuarants(data.restaurants);
        });
    }
    console.log(restaurants);
    useEffect(() => {
        fetchData()
    },[])
    
    
    return (
        <div>Home</div>
    )
}

export default Home


