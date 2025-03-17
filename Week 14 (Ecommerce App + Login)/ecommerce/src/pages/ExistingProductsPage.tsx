import { Box, Typography } from '@mui/material'
import React from 'react'
import ExistingProducts from '../components/ExistingProducts'

const ExistingProductsPage = () => {
    return (
        <Box display="flex" flexDirection="column" gap="20px">
            <Typography variant='h3'>Existing Products List</Typography>
            <ExistingProducts />
        </Box>
    )
}

export default ExistingProductsPage