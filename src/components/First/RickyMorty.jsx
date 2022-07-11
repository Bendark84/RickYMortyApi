import axios from 'axios';
import React, { useEffect, useState } from 'react';
import RickyMortyItem from '../First/RickyMortyItem';
import "../Cover/RMCover.css"
import "../First/RickyMorty.css"

const RickyMorty = () => {

    const [location, setLocation] = useState({});
    const [searchValue, setSearchValue] = useState("");
   

    useEffect(() => {

        const random = Math.floor(Math.random() * 126) + 1
        axios.get(`https://rickandmortyapi.com/api/location/${random}`)
            .then(res => setLocation(res.data));


    }, [])


    const searchType = e => {
        e.preventDefault();
        axios.get(`https://rickandmortyapi.com/api/location/${searchValue}`)
            .then(res => setLocation(res.data));

    }



    console.log(location)

    return (
        <div className='App'>

            <div className='search-div'>
                <h1>Rick y Morty</h1><br /><br />

                <form className='form' onSubmit={searchType}>   {/* para  que haga el enter en el submit */}

                    <input placeholder='Escribe un nombre y presiona enter' type="text" value={searchValue} onChange={e => setSearchValue(e.target.value)} />
                   

                    <ul >

                        <div className="cardPrincipal">

                            <div className="cardInside">


                                <h2>Name: <br /> {location.name}</h2>
                                <h3>Type:  <br />{location.type}</h3>
                                <h3>Dimension: <br />{location.dimension}</h3>
                                <h3>Population: <br />{location.population}</h3>
                            </div>
                        </div>
                        {location.residents?.map(resident => (



                           
                            <RickyMortyItem resident={resident} key={resident} />



                        ))}




                    </ul>
                </form>
            </div>
        </div>
    );
};

export default RickyMorty;