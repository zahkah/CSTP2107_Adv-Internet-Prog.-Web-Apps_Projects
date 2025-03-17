import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const CryptoDetailPage = () => {

    const { coin } = useParams();
    const [coinData, setCoinData] = useState({});
    const navigate = useNavigate();
    console.log(coin);

    useEffect(() => {
        getCoinInfo();
    }, [])

    const getCoinInfo = async () => {
        const data = await fetch(`https://api.coingecko.com/api/v3/coins/${coin}`);
        const jsonData = await data.json();
        setCoinData(jsonData);
    }

    const getImage = (image) => {
        if (image?.large) {
            return image?.large;
        } else if (image?.small) {
            return image?.small;
        }

        return image?.thumb;
    }


    return (
        <div>

            <Button onClick={() => {
                navigate('/')
            }}><ArrowBackIcon /> BACK </Button>

            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={getImage(coinData.image)}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {coinData.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {coinData.description?.en}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default CryptoDetailPage