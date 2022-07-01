import { AppBar, Box, FormControlLabel, FormGroup, IconButton, Switch, Toolbar, Typography } from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import { Searcher } from '../index';

type Props = {
    onThemeChange: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
    children: any;
}

export const HeaderGallery = ({ onThemeChange, children }: Props) => {

    const theme = useTheme();

    const handleThemeChange = () =>{
        onThemeChange(theme => theme === 'light' ? 'dark' : 'light')
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{ backgroundColor: 'transparent', boxShadow: 'none', backgroundImage: 'none' }}>
                <Toolbar>
                    <IconButton sx={{ ml: 1 }} color="inherit" onClick={handleThemeChange}>
                        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                    <Typography
                        fontFamily={'Montserrat'}
                        fontSize={40}
                        variant="body1"
                        fontWeight={200}
                        noWrap
                        marginLeft={5}
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        GALERIA DE ARTE
                    </Typography>
                    {children}
                </Toolbar>
            </AppBar>
        </Box>
    )
}