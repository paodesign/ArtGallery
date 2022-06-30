
import { Search } from '@mui/icons-material';
import { alpha, AppBar, Box, Button, Grid, IconButton, InputBase, styled, TextField, Toolbar, Typography } from '@mui/material';
import React, { ChangeEvent, Component, FormEvent, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';

const SearchStyle = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '600px',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));


type Props = {
    onSearch: (query: string) => void;
}

export function Searcher({ onSearch }: Props) {

    const [query, setQuery] = useState<string>('');
    const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        setQuery(target.value)
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (query.trim().length <= 1) return;

        onSearch(query);
        console.log('Serach criteria: ', query)
        setQuery('');
    }

    return (

        <form onSubmit={handleSubmit}>

            <SearchStyle>
                <StyledInputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search"
                    inputProps={{ 'aria-label': 'search google maps' }}
                    onChange={handleInputChange}
                    value={query}
                />
                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </SearchStyle>
        </form>
    )
}