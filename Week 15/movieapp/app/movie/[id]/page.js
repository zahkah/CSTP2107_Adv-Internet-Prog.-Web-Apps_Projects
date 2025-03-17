'use client';

import Card from '@/app/components/Card';
import React, { useEffect, use, useState } from 'react'

const URL = "https://api.themoviedb.org/3/movie";
const API_KEY = "a1da3b13110340ab19ccd74bee7d1bf9";

const MovieDetail = ({ params }) => {
    const paramsExtracted = use(params); // Extracting values from a promise
    const [movie, setMovie] = useState();

    const getMovieDetail = async () => {
        const data = await fetch(`${URL}/${paramsExtracted.id}?api_key=${API_KEY}`);
        const dataWthJson = await data.json();
        console.log(dataWthJson);
        setMovie(dataWthJson);
    }

    useEffect(() => {
        getMovieDetail();
    }, [])
    
    if (!movie) {
        return <></>
    }
    
    return (
        <div>
            <Card movie={movie} />
        </div>
    )
}

export default MovieDetail