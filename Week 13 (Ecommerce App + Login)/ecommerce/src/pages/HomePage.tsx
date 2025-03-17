import { Box, Button, Divider, Typography } from '@mui/material'
import React from 'react'
import ExistingProducts from '../components/ExistingProducts'
import CreatedProducts from '../components/CreatedProducts'
import CreateProductForm from '../components/CreateProductForm'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {

  const navigate = useNavigate();

  return (
    <Box height="calc(100vh - 64px)" display="flex" justifyContent="center" alignItems="center" gap="24px">
      <Button onClick={() => navigate('/existingProducts')} variant="outlined" color="secondary">View Existing Products</Button>
      <Button onClick={() => navigate('/createdProducts')} variant="outlined" color="primary">View Created Products</Button>
    </Box>
  )
}

export default HomePage