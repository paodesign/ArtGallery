import { useEffect, useState } from "react";
import { Artwork } from "../models/artwork";



interface APIResponse {
    
    data: Artwork
}

const useFetchArtworkById = (artworkId: number):{artwork:Artwork, isLoading:Boolean} => {
    const [artwork, setArtwork] = useState<Artwork>({} as Artwork);
    const [isLoading, setIsLoading] = useState<Boolean>(true);
    
    useEffect(() => {

        const urlApiById = `https://api.artic.edu/api/v1/artworks/${artworkId}?fields=id,title,image_id,artist_title,publication_history,date_end` ;
        //fetch from api
        fetch(urlApiById)
            .then((response: Response) => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }

                return response.json() as Promise<APIResponse>
            })
            .then(apiResp => {
                setArtwork(apiResp.data);
                setIsLoading(false);
            })
            .catch(console.error)

    }, []);


    return {

        artwork:artwork,
        isLoading
    }
  
}

export default useFetchArtworkById