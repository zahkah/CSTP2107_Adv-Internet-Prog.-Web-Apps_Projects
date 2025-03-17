import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { UserCredentials } from '../type';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';


const SignupPage = () => {

    const [userCredentials, setUserCredentials] = useState<UserCredentials>({
        fullName: '',
        dob: new Date(),
        age: 16,
        email: '',
        password: ''
    });

    const userReference = collection(db, "users");

    const navigate = useNavigate();

    const handleUserSignup = async () => {
                
        try {
            const data = await createUserWithEmailAndPassword(auth, userCredentials.email, userCredentials.password);
            setUserCredentials({...userCredentials, userId: data.user.uid});

            await addDoc(userReference, {...userCredentials, userId: data.user.uid});
            alert("User Created Succesfully");
            setTimeout(() => {
                navigate('/'); // LOGIN PAGE BY DEFAULT
            }, 2000);

        } catch (error) {
           console.log(error);
        }
    }

    return (
        <div style={{ height: '80vh' }}>
            <Paper style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center', alignItems: 'center' }} elevation={0}>
                <Typography variant="h3">Signup page</Typography>
                <Box maxWidth="500px" display="flex" flexDirection="column" gap="10px">
                    <TextField type="text" label="Full Name" variant="outlined" value={userCredentials.fullName} onChange={(e) => setUserCredentials({ ...userCredentials, fullName: e.target.value })} />
                    <TextField type="email" label="Email" variant="outlined" value={userCredentials.email} onChange={(e) => setUserCredentials({ ...userCredentials, email: e.target.value })} />
                    <TextField type="password" label="Password" variant="outlined" value={userCredentials.password} onChange={(e) => setUserCredentials({ ...userCredentials, password: e.target.value })} />
                    <TextField type="number" label="Age" variant="outlined" value={userCredentials.age} onChange={(e) => setUserCredentials({ ...userCredentials, age: Number(e.target.value) })} />
                    <TextField type="date" label="Date of Birth" variant="outlined" value={userCredentials.dob} onChange={(e) => setUserCredentials({ ...userCredentials, dob: e.target.value })} />
                    <Button variant="contained" onClick={handleUserSignup}>Signup</Button>
                </Box>
            </Paper>
        </div>
    )
}

export default SignupPage