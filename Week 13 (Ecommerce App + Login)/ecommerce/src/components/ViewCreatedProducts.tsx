import React, { FC, useContext, useEffect } from 'react'
import { Box } from '@mui/material';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import ProductsContext from '../context/ProductsContext';
import { Product } from '../type';
import ProductCard from './ProductCard';
import UserContext from '../context/UserContext';


type ViewCreatedProductsType = {
    isSubmitted: boolean;
}

const ViewCreatedProducts: FC<ViewCreatedProductsType> = ({ isSubmitted }) => {

    const productReference = collection(db, "products");
    const { productsData, setProductsData } = useContext(ProductsContext);
    const { userData, setUserData } = useContext(UserContext);

    console.log(userData, 'userData');


    useEffect(() => {
        getProductsList();
    }, [isSubmitted]);

    const getProductsList = async () => {
        const products = await getDocs(productReference);
        const productsReadableData = products.docs.map((product) => {
            return { 
                ...product.data(),
                id: product.id
            }
        }) as Product[]


        const user = localStorage.getItem('current-user') || '';
        const userParsed = JSON.parse(user);

        const filteredProducts = productsReadableData.filter((product ) => product.authorId === userParsed.uid);

        console.log(productsReadableData, 'products')

        setProductsData({
            ...productsData,
            createdProducts: filteredProducts
          });

        console.log(productsReadableData, 'productInfo');
    }

    return (
        <Box display="grid" gridTemplateColumns="repeat(6, 1fr)" gap="20px">
            {
                productsData.createdProducts.map((data, index) => {
                    return <ProductCard data={data} key={index} />
                })
            }
        </Box>
    )
}

export default ViewCreatedProducts