
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, CircularProgress, Collapse, IconButton, IconButtonProps, Modal, styled, Typography } from '@mui/material';
import React, { useState } from 'react'
import useFetchArtworkById from '../../hooks/useFetchArtworkById';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';

const styleScroll = {
  '*::-webkit-scrollbar': {
    width: '10px'
  },
  '*::-webkit-scrollbar-track': {
    '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
  },
  '*::-webkit-scrollbar-thumb': {
    backgroundColor: '#D69D66',

  },
  '*::-webkit-scrollbar-thumb:hover': {
    backgroundColor: ' #b30000',
  }

}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

type Props = {
  artworkId: number;
  onModalClose: () => void;
}

export const ArtworkDetail = ({ artworkId, onModalClose }: Props) => {

  const [openModal, setOpenModal] = useState(true);
  const { artwork, isLoading } = useFetchArtworkById(artworkId);
  const [expanded, setExpanded] = React.useState(false);

  const handleModalClose = () => {
    setOpenModal(false);
    onModalClose();
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Modal sx={{ overflow: 'scroll', overflowX: 'hidden' }}
      open={openModal}
      onClose={handleModalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >

      {
        isLoading ? <CircularProgress color='secondary' size={100}/> :
          <Card sx={{ maxWidth: 800, mr: 'auto', ml: 'auto', mt: '5%' }}>
            <CardHeader
              avatar={
                <Avatar
                  aria-label="recipe"
                  src="/broken-image.jpg"
                  sx={{ bgcolor: '#D69D66' }}
                />
              }
              action={
                <IconButton
                  aria-label="settings"
                  onClick={handleModalClose}
                >
                  <CloseIcon />
                </IconButton>
              }
              title={artwork.artist_title}
              subheader={artwork.date_end}
            />
            <CardMedia
              component='img'
              image={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
              alt={artwork.title}
            />

            <CardContent>
              <Typography
                fontFamily={'Montserrat'}
                fontWeight={'800'}
                fontSize={'x-large'}
                id="modal-title"
                variant="subtitle1"
                gutterBottom
                color='text.secondary'
              >
                {artwork.title}
              </Typography>
            </CardContent>

            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              {artwork.publication_history ?
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
                : null
              }
            </CardActions>
            <Collapse
              in={expanded}
              timeout="auto"
              unmountOnExit
            >
              <CardContent sx={styleScroll}>
                <Typography paragraph
                  fontFamily={'Montserrat'}
                  fontWeight={'600'}
                >
                  Detalle de la Obra:
                </Typography>
                <Typography
                  paragraph
                  whiteSpace={'break-spaces'}
                  fontFamily={'Montserrat'}
                  fontWeight={'600'}
                  lineHeight={'1.2'}
                  fontSize={'initial'}
                  color="pallete.text.primary"
                  dangerouslySetInnerHTML={{ __html: artwork.publication_history }}
                  sx={{ mt: 2, height: 260, overflow: 'scroll', overflowX: 'hidden' }}>
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
      }
    </Modal >
  )
}
