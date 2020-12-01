import React, { useState, useEffect } from 'react'
import '../css/Banner.css';
import axios from '../axios';
import request from '../request';

function Banner() {
    const [movie, setMovie] = useState([])
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(request.fetchActionMovies);
            setMovie(response.data.results[ Math.floor(Math.random() * response.data.results.length -1)])
            return response
        }
        fetchData()
    }, [])

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str;
    }
    return (
        <header className="banner" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`
        }}>
            <div className='banner_contents'>
                <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className='banner_buttons'>
                    <button className='banner_button'>WATCH NOW</button> 
                </div>
                <h2 className="banner_description">{truncate(movie?.overview, 150)}</h2>
            </div>
        </header>
    )
}

export default Banner
