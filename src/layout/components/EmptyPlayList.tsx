import React from 'react';
import { styled, Box, Typography, Button } from '@mui/material';

const PlayListBox = styled(Box)({
  backgroundColor: "#212121",
  borderRadius: "8px",
  padding: "20px",
  width: "100%"
});

const CreatePlaylistButton = styled(Button)({
  marginTop: "20px",
  fontWeight: "700"
});

const EmptyPlayList = () => {
  return (
    <PlayListBox>
      <Typography variant="h2" fontWeight={700}>Create your first playlist</Typography>
      <Typography variant="body1">It's easy, we'll help you</Typography>
      <CreatePlaylistButton variant="contained" color="secondary">Create Playlist</CreatePlaylistButton>
    </PlayListBox>
  )
}

export default EmptyPlayList
