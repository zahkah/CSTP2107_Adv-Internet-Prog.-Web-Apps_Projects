import React, { useContext } from 'react'
import TextField from '@mui/material/TextField';
import { Box, Button } from '@mui/material';
import GitContext from '../context/GitContext';

const SearchBar = ({ handleSearchClick, currentUser, setCurrentUser }) => {

  const { setReposList } = useContext(GitContext);

  return (
    <Box display="flex">
        <TextField
            id="standard-search"
            label="Search for Users"
            type="search"
            variant="outlined"
            value={currentUser}
            fullWidth={true}
            onChange={(event) => setCurrentUser(event.target.value)}
        />
        <Button variant='contained' onClick={() => {
            handleSearchClick();
            setReposList([]);
        }}>Search</Button>
    </Box>
  )
}

export default SearchBar