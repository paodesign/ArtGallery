
import React, { ChangeEvent, Component, FormEvent, useState } from 'react'

type Props = {
    onSearch: (query: string) => void;
}

function Searcher({onSearch}:Props) {

    const [query, setQuery] = useState<string>('');
    const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        setQuery(target.value)
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(query.trim().length <= 1) return;

        onSearch(query);
        console.log('Serach criteria: ' , query)
        setQuery('');
    }

    


    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder='Buscar Obra'
                        value={query}
                        onChange={handleInputChange} />
                    <button
                        type="submit">
                        Buscar
                    </button>
                </form>
            </div>
        </>
    )
}


export default Searcher