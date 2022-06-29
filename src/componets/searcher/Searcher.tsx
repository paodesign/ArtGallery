
import { Search } from '@mui/icons-material';
import { Button, Grid, TextField } from '@mui/material';
import React, { ChangeEvent, Component, FormEvent, useState } from 'react'

type Props = {
    onSearch: (query: string) => void;
}

function Searcher({ onSearch }: Props) {

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
        <>
            <form onSubmit={handleSubmit}>

                <Grid
                    container
                    direction={'row'}
                    spacing={1}
                    justifyContent={'center'}
                    sx={{ mb: 5, width: '100vh', backgroundColor: 'white' }}
                >

                    <Grid item>
                        <TextField className='outlined-color'
                            id="outlined-basic"
                            label="Buscar Obra"
                            variant="outlined"
                            type="text"
                            value={query}
                            onChange={handleInputChange}
                        />

                    </Grid>
                    <Grid item>
                        <Button

                            fullWidth
                            variant="outlined"
                            type="submit"
                        >
                            <Search />
                        </Button>
                    </Grid>

                </Grid>

            </form>

        </>
    )
}


export default Searcher