import { useEffect, useState } from 'react'
import { Artwork } from '../../models/artwork';
// import { ArtworkDetail } from '../artwork-detail/ArtworkDetail';


function ArtworkList() {

    const [artworks, setArtworks] = useState<Array<Artwork>>([{ id: '1', title: 'miobra' }, { id: '2', title: 'miobra2' }])

    useEffect(() => {
        //fetch from api

    }, [artworks]);


    return (
        <>
            <ul>
                {
                    artworks?.map(aw => {
                        return <li key={aw.id}>{aw.title}</li>
                    })}
            </ul>
        </>
    )
}

export default ArtworkList