import { Grid } from '@mui/material';
import useFetchArtworks from '../../hooks/useFetchArtworks';
import { ArtworkItem } from '../index';


export function ArtworkList() {

    const { artworks, isLoading } = useFetchArtworks();

    return (
        <div >
            <Grid
                container
                direction="column"
            >
                <Grid item
                    className='card-grid'
                    xs={3}
                    md={5}
                    lg={5}

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
        </div>
    )
};