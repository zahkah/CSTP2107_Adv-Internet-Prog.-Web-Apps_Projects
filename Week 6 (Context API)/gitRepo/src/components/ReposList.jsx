import React, { useContext } from 'react'
import GitContext from '../context/GitContext'
import RepoCard from './RepoCard';
import { Box } from '@mui/material';

const ReposList = () => {

    const { reposList } = useContext(GitContext);
    return (
        <Box display="grid" gridTemplateColumns="33% 33% 33%" gap="16px">
            {
                reposList.map((repoInfo) => {
                    return <RepoCard repoInfo={repoInfo} />
                })
            }
        </Box>
    )
}

export default ReposList