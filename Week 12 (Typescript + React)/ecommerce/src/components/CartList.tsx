import React, { FC } from 'react'
import { Product } from '../types';
import ProductList from './ProductList';


type CartItemProps = {
    isOpen: boolean;
    handleIsOpen: () => void;
    cartList: Product[]
}

const CartList: FC<CartItemProps> = ({ isOpen, handleIsOpen, cartList }) => {

    if (!isOpen) {
        return null;
    }


    return (
        // Todo: Import Tailwind CSS
        <div style={{ overflow: 'auto', backgroundColor: 'white', width: '400px', position: 'absolute', top: 0, height: '100vh', border: '1px solid black' }}>
            <div className='flex justify-end'>
            <button onClick={handleIsOpen} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-example" data-drawer-show="drawer-example" aria-controls="drawer-example">
                X
            </button>
            </div>
            
            <div>
                <ProductList products={cartList} />
            </div>
        </div>
    )
}

export default CartList