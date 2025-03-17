import { Box, Button, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React, { useContext } from 'react'
import GitContext from '../context/GitContext'
import axios from 'axios';
import { API_URL } from '../constant';

const SearchedUser = ({ currentUserInfo }) => {


    // Access the Context here
    const { setReposList } = useContext(GitContext);

    const getRepositoriesForUser = async () => {
        const { data } = await axios.get(`${API_URL}/${currentUserInfo.login}/repos`);
        setReposList(data);
    }

    return (
        <div>
            <Card sx={{ display: 'flex' }}>
                <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image={currentUserInfo.avatar_url}
                    alt="Live from space album cover"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>

                        <Typography component="div" variant="h5">
                            {currentUserInfo.login}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            component="div"
                            sx={{ color: 'text.secondary' }}
                        >
                            <Button onClick={() => window.open(currentUserInfo.followers_url)}>Folowers</Button>

                        </Typography>

                        <Button variant="contained" onClick={getRepositoriesForUser}>Get Repositories</Button>
                    </CardContent>
                </Box>

            </Card>
        </div>
    )
}

export default SearchedUser