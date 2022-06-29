import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Artwork } from '../../models/artwork'
import './ArtworkItem.css'

type Props = {
  artwork: Artwork
}

export function ArtworkItem({artwork}:Props) {
  return (
    <div className="card">

    <Card sx={{ maxWidth: 400 }} >
    <CardActionArea>
      <CardMedia
        component="img"
        height="175"
        image={"https://via.placeholder.com/150x200"}
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
  </Card>
    </div>
  )
};