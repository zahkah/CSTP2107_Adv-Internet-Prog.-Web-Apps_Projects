import { createTheme } from "@mui/material"
import { green, orange, purple, red } from "@mui/material/colors"


export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            paper: purple[400]
        },
        primary: {
            main: purple[400]
        },
        secondary: {
            main: green[200]
        }   
    },
})

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            paper: orange[400]
        },
        primary: {
            main: orange[400]
        },
        secondary: {
            main: red[200]
        }   
    },
})