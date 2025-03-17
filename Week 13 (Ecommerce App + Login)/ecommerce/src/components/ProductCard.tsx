import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React, { FC } from 'react'
import { Product } from '../type'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { collection, doc, documentId, getDocs, query, updateDoc, where } from 'firebase/firestore';
import { db } from '../firebaseConfig';

interface ProductCardProps {
    data: Product
}

const ProductCard: FC<ProductCardProps> = ({ data }) => {

    const handleFavorites = async () => {
        
        const user = localStorage.getItem('current-user') || '';
        const userParsed = JSON.parse(user);

        const userReference = collection(db, "users");
        const foundUser = query(userReference, where('userId', '==', userParsed.uid))
        const docData = await getDocs(foundUser);

        const userInfo = docData.docs.map((user) => {
            return {
                ...user.data(),
                id: user.id
            }
        });

        // You need to know the previous Favorites.
        // Append to that a new favorite ?

        //  user --> [Products]
        await updateDoc(doc(db, "users", userInfo[0].id), {
            favorites: data.id
        })
    }

    return (
        <Card style={{ flexBasis: 400 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={data.image}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {data.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {data.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={handleFavorites} size="small" color="error"><FavoriteIcon /></Button>
            </CardActions>
        </Card>
    )
}

export default ProductCard