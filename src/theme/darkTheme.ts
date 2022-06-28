import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";


export const darkTheme = createTheme({
    palette:{
        primary: {
            main: '#242319'
        },
        secondary: {
            main: '#605D47'
        },
        error: {
            main: red.A400
        }
    }
})