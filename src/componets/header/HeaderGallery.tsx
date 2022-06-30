import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { Searcher } from '../index';

export const HeaderGallery = ({ children }: any) => (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ mr: 2 }}
                >

                </IconButton>
                <Typography
                    variant="h6"
                    noWrap
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