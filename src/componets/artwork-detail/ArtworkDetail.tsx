import { Tablet } from '@mui/icons-material';
import { autocompleteClasses, Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, CircularProgress, Collapse, Dialog, Grid, IconButton, IconButtonProps, ListItemSecondaryAction, Modal, Paper, styled, Typography } from '@mui/material';
import React, { useState } from 'react'
import useFetchArtworkById from '../../hooks/useFetchArtworkById';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { palette } from '@mui/system';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  borderRadius: '10px',
  p: 4,
  width: '900px',
  height: '1000px'
};

const styleModal = {
  width: 'auto',
  height: '1000px',
}


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

  const handleModalClose = () => {
    setOpenModal(false);
    onModalClose();
  }

  const { artwork, isLoading } = useFetchArtworkById(artworkId);

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Modal sx={styleModal}
      open={openModal}
      onClose={handleModalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >

      <Card sx={{ maxWidth: 800, style }}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" src="/broken-image.jpg" sx={{ bgcolor: '#D69D66' }} />
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={artwork.artist_title}
          subheader={artwork.date_end}
        />
        {
          isLoading ? <CircularProgress /> :
            <CardMedia
              component="img"
              height="650"
              image={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/800,/0/default.jpg`}
              alt={"texto alt"}
            />
        }

        <CardContent>
          <Typography 
            fontFamily={'Montserrat'}
            id="modal-title"
            variant="subtitle1"
            gutterBottom
            color= 'palette.text.secondary'
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
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent sx={styleScroll}>
            <Typography paragraph fontFamily={'Montserrat'}>Detalle de la Obra:</Typography>
            <Typography paragraph
              whiteSpace={'break-spaces'}
              fontFamily={'Montserrat'}
              color="pallete.text.primary"
              sx={{ mt: 2, height: 280, overflow: 'scroll', overflowX: 'hidden' }}>
              {artwork.publication_history}
            </Typography>
          </CardContent>
        </Collapse>



        {/* <Box sx={style}>
        {
          isLoading ? <CircularProgress /> :
          <img
          src={
            `https://www.artic.edu/iiif/2/${artwork.image_id}/full/800,/0/default.jpg`
          }
          alt={"texto alt"}
          width={"800px"}
          height={"620px"}
          />
        } */}
        {/* <Typography
          fontFamily={'Montserrat'}
          id="modal-title"
          variant="subtitle1"
          gutterBottom>
          {artwork.title}
        </Typography>


        <Box component={Paper} sx={styleScroll}>

          <Typography paragraph
            whiteSpace={'break-spaces'}
            fontFamily={'Montserrat'}
            sx={{ mt: 2, height: 280, overflow: 'scroll', overflowX: 'hidden' }}>
            {artwork.publication_history}
          </Typography>
        </Box> */}

      </Card>


      {/* </Box> */}
    </Modal >
  )
}
