import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { useState } from 'react'
import { Artwork } from '../../models/artwork'
import { ArtworkDetail } from '../artwork-detail/ArtworkDetail'
import './ArtworkItem.css'

type Props = {
  artwork: Artwork
}

export function ArtworkItem({ artwork }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <Card className='card' sx={{ maxWidth: 400 }}>
      <CardActionArea  >
        <CardMedia
          component="img"
          height="175"
          image={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/400,/0/default.jpg`}
          alt="green iguana"
        />
        <CardContent >
          <Typography gutterBottom variant="h6" component="div">
            {artwork.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Artista: {artwork.artist_title || "Anonimo"}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={() => setOpen(true)} size="small" color="primary">
          Share
        </Button>
      </CardActions>
      {open ? <ArtworkDetail artworkId={artwork.id} onModalClose={() => setOpen(false)} /> : null}
    </Card>
  )
}; 