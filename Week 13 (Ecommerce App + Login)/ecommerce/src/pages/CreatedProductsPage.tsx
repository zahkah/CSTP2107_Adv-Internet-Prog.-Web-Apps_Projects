import { Button, Dialog, DialogTitle, DialogContent, Box, Divider } from '@mui/material'
import React, { useContext, useState } from 'react'
import CreateProductForm from '../components/CreateProductForm';
import { addDoc, collection } from 'firebase/firestore';
import { Product } from '../type';
import { db } from '../firebaseConfig';
import ViewCreatedProducts from '../components/ViewCreatedProducts';


// User Object -> List of Product Ids
// Product Object --> List of Users
// Favorites --> { userId, ProductId }

const CreatedProductsPage = () => {

    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const handleClickOpen = () => {
        setIsDialogOpen(true);
    }

    const handleClose = () => {
        setIsDialogOpen(false);
    };

    const productReference = collection(db, "products");

    const handleSubmit = async (productForm: Product) => {
        try {
            const fetchedUser = localStorage.getItem('current-user') || '';
            const user = JSON.parse(fetchedUser);
            if (user) {
                productForm.authorId = user.uid
            }

            const product = await addDoc(productReference, productForm);
            localStorage.setItem("product", JSON.stringify(product));
            alert("Product Created Succesfully");
            setIsSubmitted(true);
            handleClose();
        } catch (error) {
            console.log(error);
            handleClose();
            alert("Error Creating Product");
        }
    }

    return (
        <Box margin="0">

            <Box display="flex" justifyContent="flex-end" margin="10px 10px">
                <Button variant="outlined" onClick={handleClickOpen}>
                    Create Product +
                </Button>
            </Box>

            <Box>
                <ViewCreatedProducts isSubmitted={isSubmitted} />
            </Box>

            {/* Dialog Component */}
            <Dialog
                open={isDialogOpen}
                onClose={handleClose}
            >

                <DialogTitle>Create Product</DialogTitle>
                <DialogContent>
                    <CreateProductForm handleSubmit={handleSubmit} />
                </DialogContent>
            </Dialog>
        </Box>
    )
}

export default CreatedProductsPage