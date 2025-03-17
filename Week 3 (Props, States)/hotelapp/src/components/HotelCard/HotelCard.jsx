import React from 'react'
import './HotelCard.css';

const HotelCard = ({ hotel }) => {
    return (
        <div className='card-container'>
            <h3>{hotel.title}</h3>
            <div className='card-header'>
                <img src={hotel.image} alt="" />
            </div>

            <div className='card-body'>
                <div className='card-sub-body'>
                    <img src="https://pngimg.com/d/star_PNG1592.png" alt="" />
                    <span>{hotel.rating}</span>
                </div>

                <div className='card-sub-body'>
                    <img src="https://pngimg.com/d/like_PNG14.png" alt="" />
                    <span>{hotel.like}</span>
                </div>

                <b>{hotel.location}</b>
            </div>
        </div>
    )
}

export default HotelCard