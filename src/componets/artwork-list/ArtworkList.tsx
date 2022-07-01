import { Container, Grid, Pagination } from '@mui/material';
import { useState } from 'react';
import useFetchArtworks from '../../hooks/useFetchArtworks';
import { ArtworkItem } from '../index';

type Props = {
    query: string;
}

export function ArtworkList({query}:Props) {

    const [page, setPage] = useState(1);
    const { artworks, isLoading, paginator } = useFetchArtworks(query, page);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    return (
        <Container maxWidth='xl'>
            <Grid
                container
                direction="column"
            >
                <Grid item
                    className='card-grid'
                    xs={12}
                    md={6}
                    lg={3}
                    xl={3}
                >
                    {
                        artworks?.map(aw => (
                            <ArtworkItem
                                key={aw.id}
                                artwork={aw}
                            />
                        ))
                    }
                </Grid>
            </Grid>

            <Pagination count={paginator.total_pages} page={page} onChange={handleChange} size="large" color="secondary" className="pagination-center "/>
    
        </Container>
    )
};