import React, { FC } from 'react'

const Navbar: FC = () => {
    return (
        <nav className="bg-white mb-8 dark:bg-gray-900 w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className=" flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-example" data-drawer-show="drawer-example" aria-controls="drawer-example">
                        View Cart
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar