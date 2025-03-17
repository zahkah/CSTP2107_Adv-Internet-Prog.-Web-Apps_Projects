import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React, { FC, useContext } from 'react'
import UserContext from '../context/UserContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navbar: FC = () => {
    const { userData, setUserData } = useContext(UserContext);
    const navigate = useNavigate();
    
    const handleUserSignout = () => {
        signOut(auth).then((_data) => {
            localStorage.removeItem('current-user');
            setUserData({ isUserloggedIn: false })
            setTimeout(() => {
                navigate('/');
            }, 2000);
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link style={{ textDecoration: 'unset', color: 'white'}} to="/home">Welcome to Ecommerce</Link>
                    </Typography>

                    {
                        userData.isUserloggedIn ? <Button onClick={handleUserSignout} variant="outlined" color="inherit">Signout</Button> : null
                    }

                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar