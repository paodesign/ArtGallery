
import { Search } from '@mui/icons-material';
import { Button, TextField } from '@mui/material';
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
            <div>
                <form onSubmit={handleSubmit}>
                    <TextField
                        id="outlined-basic"
                        label="Buscar Obra"
                        variant="outlined"
                        type="text"
                        value={query}
                        onChange={handleInputChange}
                    />
                    <Button
                        variant="outlined"
                        type="submit"
                    >
                        <Search />
                    </Button>

                </form>
            </div>
        </>
    )
}


export default Searcher