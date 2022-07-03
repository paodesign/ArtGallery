import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";


export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#242319'
        },
        secondary: {
            main: '#D69D66'
        },
        error: {
            main: red.A400
        },
        text: {
            primary: '#fff',//white
            secondary: '#D69D66',
        }
    }
})