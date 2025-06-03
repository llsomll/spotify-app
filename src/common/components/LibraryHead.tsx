import React from 'react';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { styled, Box, Typography, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const LibraryHead = () => {
    return (
        <Box display="flex" alignItems="center" justifyContent="space-between" padding="8px">
            <BookmarkIcon />
            <Typography variant="h2" fontWeight={700}>Your Library</Typography>
            <Button>
                <AddIcon />
            </Button>
        </Box>
    )
}

export default LibraryHead
