import { useEffect, useState } from "react";
import {Pagination, Artwork} from '../models/index';

const fields ="id,title,image_id,artist_title,publication_history,date_end";

interface APIResponse {
    pagination: Pagination,
    data: Array<Artwork>
}

const useFetchArtworks = (query?: string, page = 1):{artworks: Array<Artwork>, isLoading: Boolean, paginator: Pagination} => {
    const [artworks, setArtworks] = useState<Array<Artwork>>([]);
    const [isLoading, setIsLoading] = useState<Boolean>(true);
    const [paginator, setPaginator ] = useState<Pagination>({limit: 12, current_page: page} as Pagination);
    
    useEffect(() => {
        const urlApiAll = `https://api.artic.edu/api/v1/artworks?page=${page}&limit=${paginator.limit}&fields=${fields}`;
        const urlApiSearch = `https://api.artic.edu/api/v1/artworks/search?q=${query}&page=${page}&limit=${paginator.limit}&fields=${fields}`;
        //fetch from api
        fetch(query ? urlApiSearch : urlApiAll)
            .then((response: Response) => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }

                return response.json() as Promise<APIResponse>
            })
            .then(apiResp => {
                setArtworks(apiResp.data);
                setPaginator(apiResp.pagination);
                setIsLoading(false);
            })
            .catch(console.error)

    }, [query, page]);


    return {

        artworks:artworks,
        isLoading,
        paginator
    }
  
}

export default useFetchArtworks