import { Box, Button, Paper, TextField } from '@mui/material'
import React, { FC, useState } from 'react'
import { Product } from '../type';
import { INITIAL_PRODUCT } from '../constants';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../firebaseConfig';

type CreateProductFormProps = {
    handleSubmit: (productForm: Product) => void
}

const CreateProductForm: FC<CreateProductFormProps> = ({ handleSubmit }) => {

    const [productForm, setProductForm] = useState<Product>(INITIAL_PRODUCT);
    const [isImageUploaded, setIsImageUploaded] = useState<boolean>(false);

    // https://api.cloudinary.com/v1_1/{cloud_name}/image/upload

    const handleUploadImage = async (event) => {
        setIsImageUploaded(true);
        const fileValue = event.target.files[0];

        // First step
        const formData = new FormData();

        // Second Step
        formData.append("upload_preset", "your_preset");

        // Third Step
        formData.append("file", fileValue);


        // Fourth Step Call the API to store Info

        const response = await fetch('https://api.cloudinary.com/v1_1/drnxdekl4/image/upload', {
            method: 'POST',
            body: formData  
        })

        const data = await response.json();
        setIsImageUploaded(false);

        setProductForm({ ...productForm, image: data.url});

        // FIREBASE STORAGE IS NOW PAID!
        // const storageRef = ref(storage, `images/${new Date().toDateString()}/products`);
        
        // // What it does it it tells how much image is uploaded by %
        // const uploadImage = uploadBytesResumable(storageRef, fileValue);

        // // Here snapshot will give you the info about how  much image is uploaded.
        // uploadImage.on("state_changed", (snapshot) => {
        //     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100; // Progress %
        //     setImageProgress(progress);
        // }, (error) => {
        //     console.log(error, 'Something went wrong while uploading');
        // }, async () => {
        //     const data = await getDownloadURL(uploadImage.snapshot.ref);
        //     setProductForm({ ...productForm, image: data})
        // })
    }

    return (
        <Paper style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center', alignItems: 'center' }} elevation={0}>
            <Box maxWidth="500px" display="flex" flexDirection="column" gap="10px">
                <TextField type="text" label="title" variant="outlined" value={productForm?.title} onChange={(e) => setProductForm({ ...productForm, title: e.target.value })} />
                <TextField type="text" label="description" variant="outlined" value={productForm?.description} onChange={(e) => setProductForm({ ...productForm, description: e.target.value })} />
                <TextField type="text" label="category" variant="outlined" value={productForm?.category} onChange={(e) => setProductForm({ ...productForm, category: e.target.value })} />
                <TextField type="number" label="price" variant="outlined" value={productForm?.price} onChange={(e) => setProductForm({ ...productForm, price: Number(e.target.value) })} />
                <TextField type='file' onChange={handleUploadImage}></TextField>
                <Button disabled={isImageUploaded} variant="contained" onClick={() => handleSubmit(productForm)}>Submit</Button>
            </Box>
        </Paper>
    )
}

export default CreateProductForm