import React, { FC } from 'react'
import { Product } from '../types'
import ProductItem from './ProductItem'

type ProductListProps = {
    products: Product[];
    handleCartList?: (product: Product) => void
}

const ProductList: FC<ProductListProps> = ({ products, handleCartList }) => {
    return (

        <>
            {
                products.map((product) => <ProductItem product={product} handleCartList={handleCartList} />)
            }

        </>

    )
}

export default ProductList