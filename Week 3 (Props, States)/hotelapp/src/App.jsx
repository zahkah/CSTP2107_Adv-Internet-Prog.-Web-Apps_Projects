import { useState } from 'react';
import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import data from './constant.json';
import HotelList from './components/HotelList/HotelList';

function App() {

  const [hotelData, setHotelData] = useState(data);

  return (
    <div>
      {/* Header Component */}
      <Header />

      {/* Banner Component */}
      <Banner />

      {/* Hotel List */}

      <h1>Following are the list of hotels!</h1>

      <HotelList hotelData={hotelData} />
    </div>
  )
}

export default App
