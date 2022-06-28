import useFetchArtworks from '../../hooks/useFetchArtworks';
import { ArtworkItem } from '../index';


export function ArtworkList() {
    const { artworks, isLoading } = useFetchArtworks();

    return (
        <div className='card-grid'>
            {
                artworks?.map(aw => (
                    <ArtworkItem
                        artwork={aw}
                    />
                ))
            }
        </div>
    )
};