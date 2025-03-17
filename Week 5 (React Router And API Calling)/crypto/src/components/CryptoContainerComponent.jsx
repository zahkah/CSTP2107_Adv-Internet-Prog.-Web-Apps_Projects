import React from 'react'
import CryptoTableComponent from './CryptoTableComponent'
import { useEffect } from 'react'
import { useState } from 'react'
import { CircularProgress } from '@mui/material'

const CryptoContainerComponent = () => {

 // Table which shows crypto Information
 // Table Component

 const [apiData, setApiData] = useState([])
 const [isLoading, setisLoading] = useState();

  // I want to call the API when the components loads for the first time
 useEffect(() => {
    getCryptoData();
 }, [])

 const getCryptoData = async () => {
    setisLoading(true);
    const data = await fetch('https://api.coingecko.com/api/v3/coins/markets/?vs_currency=cad');
    const jsonData = await data.json();
    setApiData(jsonData);
    setisLoading(false);
 }

 if (isLoading) {
    return <CircularProgress />
 }

  return (
    <div>
        <CryptoTableComponent data={apiData} />
    </div>
  )
}

export default CryptoContainerComponent