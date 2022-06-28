import { useEffect, useState } from "react";
import { Artwork } from "../models/artwork"

const urlApi = "https://api.artic.edu/api/v1/artworks?limit=10&fields=id,title,image_id,artist_title,publication_history,date_end";

interface APIResponse {
    pagination: {},
    data: Array<Artwork>
}

const useFetchArtworks = (query?: string):{artworks:Array<Artwork>, isLoading:Boolean} => {
    const [artworks, setArtworks] = useState<Array<Artwork>>([]);
    const [isLoading, setIsLoading] = useState<Boolean>(true);

    useEffect(() => {
        //fetch from api
        fetch(urlApi)
            .then((response: Response) => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }

                return response.json() as Promise<APIResponse>
            })
            .then(apiResp => {
                setArtworks(apiResp.data);
                setIsLoading(false);
            })
            .catch(console.error)

    }, []);


    return {

        artworks:artworks,
        isLoading
    }
  
}

export default useFetchArtworks