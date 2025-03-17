import React from 'react'
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { Avatar, Box, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Link } from 'react-router-dom';

const CryptoTableComponent = ({ data }) => {

    const ChangeInPrice = (price) => {
        if (price > 0) {
            // Return Green JSX
            return (
                <Box display="flex" gap="8px">
                    <ArrowUpwardIcon color='success' />
                    <Box backgroundColor="#cbebcb">
                        <Typography color='success'>{price}</Typography>
                    </Box>
                </Box>
            )
        }

        return (
            <Box display="flex" gap="8px">
                <ArrowDownwardIcon color='error' />

                <Box backgroundColor="#f3b5b5">
                    <Typography color='error'>{price}</Typography>
                </Box>
            </Box>
        )

    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Typography variant="h5">Symbol</Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography variant="h5">Coin</Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography variant="h5">
                                Name
                            </Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography variant="h5">
                                Current Price
                            </Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography variant="h5">
                                Change in Price
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {
                        data.length > 0 && data.map((coinInfo, index) => {
                            return (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell>{coinInfo.symbol} </TableCell>
                                    <TableCell align="center">
                                        <Avatar alt={coinInfo.name} src={coinInfo.image} />

                                    </TableCell>
                                    <TableCell align="center">
                                        <Link to={`/crypto/${coinInfo.id}`}>
                                            {coinInfo.name}
                                        </Link>
                                    </TableCell>
                                    <TableCell align="center">CAD {coinInfo.current_price}</TableCell>
                                    <TableCell align="center">{ChangeInPrice(coinInfo.market_cap_change_percentage_24h)}</TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CryptoTableComponent