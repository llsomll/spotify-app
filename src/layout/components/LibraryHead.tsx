import React from 'react';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { styled, Box, Typography, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import useCreatePlaylist from '../../hooks/useCreatePlaylist';
import useGetCurrentUserProfile from '../../hooks/useGetCurrentUserProfile';
import { getSpotifyAuthUrl } from '../../utils/auth';


const LibraryHead = () => {

    const { data: userProfile } = useGetCurrentUserProfile()

    const { mutate: createPlaylist } = useCreatePlaylist()
    const handleCreatePlaylist = () => {
        if (userProfile) {
        createPlaylist({ name: "My Playlist" });
        } else {
        getSpotifyAuthUrl();
        }
    };

    return (
        <Box display="flex" alignItems="center" justifyContent="space-between" padding="8px">
            <BookmarkIcon />
            <Typography variant="h2" fontWeight={700}>Your Library</Typography>
            <Button>
                <AddIcon onClick={handleCreatePlaylist}/>
            </Button>
        </Box>
    )
}

export default LibraryHead
