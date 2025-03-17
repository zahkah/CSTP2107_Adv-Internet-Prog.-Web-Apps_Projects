import { Avatar, Box, Card, CardContent, CardHeader, Typography } from '@mui/material'
import React from 'react'

const RepoCard = ({ repoInfo }) => {
    return (
        <Card>
            <Box display="flex" alignItems="center">
                <CardHeader avatar={
                    <Avatar src={repoInfo.owner.avatar_url} />
                } />

                <Typography variant="h5">{repoInfo.name}</Typography>
            </Box>

            <CardContent>
                <Typography>Open Issues : {repoInfo.open_issues}</Typography>
                <Typography>Description: {repoInfo.description ? repoInfo.description : 'No Description Found'}</Typography>
            </CardContent>
        </Card>
    )
}

export default RepoCard