import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Fab, Typography } from '@mui/material'
import { useState } from 'react'
import { Artwork } from '../../models/artwork'
import { ArtworkDetail } from '../artwork-detail/ArtworkDetail'
import {Visibility} from '@mui/icons-material';

import './ArtworkItem.css'

type Props = {
  artwork: Artwork
}

export function ArtworkItem({ artwork }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <Card className='card' sx={{ maxWidth: 400, backgroundColor: 'black', color: 'secondary.main' }}>
      <CardActionArea  >
        <CardMedia
          component="img"
          height="200"
          image={artwork.image_id ? `https://www.artic.edu/iiif/2/${artwork.image_id}/full/!300,400/0/default.jpg` : process.env.PUBLIC_URL + '/images/not-found.jpg'}
          alt="Obra de arte"
        />
        <CardContent >
          <Typography
            gutterBottom
            noWrap 
            variant="h6"
            component="div"
          >
            {artwork.title}
          </Typography>
          <Typography variant="caption" color="secondary">
            Artista: {artwork.artist_title || "Anonimo"}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Fab size="small" color="secondary" aria-label="add" onClick={() => setOpen(true)} >
          <Visibility />
        </Fab>
      </CardActions>
      {open ? <ArtworkDetail artworkId={artwork.id} onModalClose={() => setOpen(false)} /> : null}
    </Card>
  )
}; 