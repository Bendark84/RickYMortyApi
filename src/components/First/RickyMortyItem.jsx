import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import "./RickyMorty.css"

const RickyMortyItem = ({ resident }) => {

    const [locationItem, setLocationItem] = useState({});

    useEffect(() => {

        axios.get(resident)
            .then(res => setLocationItem(res.data))

    }, [])

    console.log(locationItem)

    return (
        <div className='container-card'>

            <div className="card">
                <div className='cardDiv-img'>
                    {<img className='card-img' src={locationItem.image} alt="" />}
                    <h3 className="status">Status: {locationItem.status}</h3>
                </div>
                <div className="info">
                    <h2 className='name'>Name: {locationItem.name} </h2><br />
                    <h3>Gender: {locationItem.gender} </h3>
                    <h3>Species: {locationItem.species}</h3>
                    <h3>Type: {locationItem.type} </h3>
                    <h3>Episode: {locationItem.episode?.length}</h3>
                </div>
            </div>
        </div>
    );
};

export default RickyMortyItem;