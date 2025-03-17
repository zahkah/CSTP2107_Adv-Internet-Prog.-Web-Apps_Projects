'use client';

import Link from 'next/link';
import React, { use, useEffect, useState } from 'react'

const CountryName = ({ params }) => {

  const paramsExtracted = use(params); // Extracting values from a promise

  const [countryList, setCountryList] = useState([]);

  const getCountry = async () => {
    const URL = `https://restcountries.com/v3.1/name/${paramsExtracted.name}`;
    const data = await fetch(URL);
    const dataWithJson = await data.json();
    return dataWithJson;
  }

  useEffect(() => {
    getCountry().then((data) => {
      setCountryList(data);
    }).catch((erorr) => {
      console.log(error);
    })
  }, [])

  if (countryList.length === 0) {
    return <div>Searching...</div>
  }

  return (
    <div className='flex justify-center'>
      <button>
        <Link href={'/'}>--Back  </Link>
      </button>
       
      {
        countryList.map((country, index) => {
          return (
            <div key={index} className='rounded border p-2 text-center'>
              <h1 className='font-bold'>{country.name.official}</h1>
              <img src={country.flags.png} alt="" />
            </div>
          )
        })
      }
    </div>
  )
}

export default CountryName