import { useEffect, useState } from 'react'
import './App.css'
import GitContext from './context/GitContext'
import axios from 'axios';
import SearchBar from './components/SearchBar';
import SearchedUser from './components/SearchedUser';
import { AppBar, Box, Switch, ThemeProvider } from '@mui/material';
import ReposList from './components/ReposList';
import { API_URL } from './constant';
import { darkTheme, lightTheme } from './themeConfig';


function App() {

  const [reposList, setReposList] = useState([]);
  const [currentUser, setCurrentUser] = useState('');
  const [currentUserInfo, setCurrentUserInfo] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);


  const getUserInfo = async () => {
    const { data } = await axios.get(`${API_URL}/${currentUser}`);
    setCurrentUserInfo(data);
  }

  const handleSearchClick = () => {
    getUserInfo();
  }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <>
      <GitContext.Provider value={
        {
          reposList,
          setReposList
        }
      }>
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
          <AppBar>
            <Switch onChange={toggleTheme}
            />

          </AppBar>
          <Box display="flex" flexDirection="column" gap="20px">
            <SearchBar currentUser={currentUser} handleSearchClick={handleSearchClick} setCurrentUser={setCurrentUser} />

            {
              currentUserInfo && <SearchedUser currentUserInfo={currentUserInfo} />
            }

            <ReposList />
          </Box>
        </ThemeProvider>
      </GitContext.Provider>
    </>
  )
}

export default App
