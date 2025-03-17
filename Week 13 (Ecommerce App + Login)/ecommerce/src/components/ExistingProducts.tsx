import React, { useContext, useEffect } from 'react'
import ProductsContext from '../context/ProductsContext';
import ProductCard from './ProductCard';
import { Box } from '@mui/material';

const ExistingProducts = () => {

  const { productsData, setProductsData } = useContext(ProductsContext);

  useEffect(() => {
    getProductsList();
  }, []);

  const getProductsList = async () => {
    try {
      const data = await fetch('https://fakestoreapi.com/products');
      const dataWithJSon = await data.json();
      console.log(dataWithJSon, 'setDataWith')
      setProductsData({
        ...productsData,
        existingProducts: dataWithJSon
      });

    } catch (error) {
      console.log(data);
    }
  }

  return (
    <Box display="grid" gridTemplateColumns="repeat(6, 1fr)" gap="20px">
      {
        productsData.existingProducts.map((data, index) => {
          return <ProductCard data={data} key={index} />
        })
      }
    </Box>
  )
}

export default ExistingProducts