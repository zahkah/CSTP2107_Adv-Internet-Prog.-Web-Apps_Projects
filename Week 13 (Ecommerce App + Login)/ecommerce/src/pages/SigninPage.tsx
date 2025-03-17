import { Button, Paper, TextField, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { UserCredentials } from '../type';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebaseConfig';
import UserContext from '../context/UserContext';
import GoogleIcon from '@mui/icons-material/Google';

const SigninPage = () => {

    const [userCredentials, setUserCredentials] = useState<UserCredentials>({
        email: '',
        password: ''
    });

    const navigate = useNavigate();
    const { userData, setUserData } = useContext(UserContext);

    const handleUserSignin = async () => {
                
        try {
            const { user } = await signInWithEmailAndPassword(auth, userCredentials.email, userCredentials.password);
            alert("User Login Succesful");

            // THIS SAVES THE USER IN LOCALSTORAGE
            localStorage.setItem('current-user', JSON.stringify(user));
            setUserData({
                isUserloggedIn: true,
                user
            });

            setTimeout(() => {
                navigate('/home'); // LOGIN PAGE BY DEFAULT
            }, 2000);

        } catch (error) {
           console.log(error);
        }
    }

    const handleUserSigninWithGoogle =  () => {
        signInWithPopup(auth, googleProvider).then((data) => {

            // THIS SAVES THE USER IN LOCALSTORAGE
            localStorage.setItem('current-user', JSON.stringify(data.user));
            setUserData({
                isUserloggedIn: true,
                user: data.user
            });

            setTimeout(() => {
                navigate('/home'); // LOGIN PAGE BY DEFAULT
            }, 2000);
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <div style={{ height: '80vh'}}>
            <Paper style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center', alignItems: 'center'}} elevation={0}>
                <Typography variant="h3">Signin page</Typography>
                <TextField type="email" label="Outlined" variant="outlined" value={userCredentials.email} onChange={(e) => setUserCredentials({ ...userCredentials, email: e.target.value })} />
                <TextField type="password" label="Outlined" variant="outlined" value={userCredentials.password} onChange={(e) => setUserCredentials({ ...userCredentials, password: e.target.value })} />
                <Button onClick={handleUserSignin} variant="contained">Signin</Button>
                <Button onClick={handleUserSigninWithGoogle} variant="contained">
                    <GoogleIcon /> 
                    <span>Signin With Google</span>
                </Button>

            </Paper>
        </div>
    )
}

export default SigninPage