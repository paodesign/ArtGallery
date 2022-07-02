import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";


export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#878787'
        },
        secondary: {
            main: '#D69D66'
        },
        error: {
            main: red.A400
        }
    }
})