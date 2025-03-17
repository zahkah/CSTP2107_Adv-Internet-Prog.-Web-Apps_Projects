import { createContext } from "react";
import { Product } from "../type";

interface CustomProduct {
    existingProducts: Product[],
    createdProducts: Product[]
}

export interface ProductsContextType {
    productsData: CustomProduct,
    setProductsData: (productsData: CustomProduct) => void;
}

export const INITIAL_PRODUCT: ProductsContextType = {
    productsData: {
        createdProducts: [],
        existingProducts: []
    },
    setProductsData: () => { }
}

const ProductsContext = createContext(INITIAL_PRODUCT);

export default ProductsContext;