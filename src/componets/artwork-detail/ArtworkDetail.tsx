import { Tablet } from '@mui/icons-material';
import { autocompleteClasses, Box, Button, CircularProgress, Dialog, Grid, Modal, Paper, Typography } from '@mui/material';
import React, { useState } from 'react'
import useFetchArtworkById from '../../hooks/useFetchArtworkById';
import { Artwork } from '../../models/artwork';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  borderRadius: '10px',
  p: 4
};

const styles = {
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em'
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid slategrey'
    }
  }
};


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

  return (
    <Modal
      open={openModal}
      onClose={handleModalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        width: '400',
        height:'300',
         margin: 'auto',
        "&::-webkit-scrollbar": { width: 20},
        "&::-webkit-scrollbar-track": { backgroundColor: 'orange' },
        "&::-webkit-scrollbar-thumb": { backgroundColor:'red',
        borderRadius: 2} }}
      
    >
      <Box sx={style}>
        {
          isLoading ? <CircularProgress /> :
            <img
              src={
                `https://www.artic.edu/iiif/2/${artwork.image_id}/full/800,/0/default.jpg`
              }
              alt={"texto alt"}
            />
        }
        <Typography id="modal-title" variant="button" gutterBottom>
          {artwork.title}
        </Typography>


        <Box component={Paper} >

          <Typography paragraph  sx={{ mt: 2 }}>
            {artwork.publication_history}
          </Typography>
        </Box>


      <Box component="span" m={2}>
      </Box>
    </Box>
    </Modal >
  )
}
