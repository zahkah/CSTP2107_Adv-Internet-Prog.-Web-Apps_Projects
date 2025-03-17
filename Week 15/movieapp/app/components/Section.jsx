'use client';

import React, { useEffect, useState } from 'react'
import { ParseTitle } from '../util/util';
import Card from './Card';

const URL = "https://api.themoviedb.org/3/movie";
const API_KEY = "a1da3b13110340ab19ccd74bee7d1bf9";
const Section = ({ title }) => {

    const [movies, setMovies] = useState([]);

    const getMoviesList = async () => {
        const res = await fetch(`${URL}/${title}?api_key=${API_KEY}`);
        const { results } = await res.json();
        setMovies(results);
    }

    useEffect(() => {
        getMoviesList();
    }, [])

    console.log(movies, 'movies');

    if (movies.length === 0) {
        return <></>
    }

    return (
        <div className='container mx-auto m-16'>
            <h1 className='text-4xl mb-4 font-bold'>{ParseTitle(title)}</h1>

            <div className='flex gap-16 overflow-y-scroll'>
                {
                    movies.map((movie, index) => {
                        return <Card movie={movie} key={index} />
                    })
                }
            </div>
        </div>
    )
}

export default Section