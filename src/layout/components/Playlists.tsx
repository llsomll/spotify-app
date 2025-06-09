import React from "react";
import { Box, Typography } from "@mui/material";
import { SimplifiedPlaylistObject } from "../../models/playlist";
import MusicNoteIcon from '@mui/icons-material/MusicNote';

type PlaylistsProps = {
  playlists: SimplifiedPlaylistObject[];
};

const Playlists = ({ playlists }: PlaylistsProps) => {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      {playlists.map((playlist) => {
        const imageUrl = playlist.images?.[0]?.url;
        return (
          <Box
            key={playlist.id}
            display="flex"
            flexDirection="row"
            gap={2}
            alignItems="center"
          >
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={playlist.name}
                style={{ width: "50px", height: "50px", borderRadius: "8px" }}
              />
            ) : (
              <Box
                width="50px"
                height="50px"
                borderRadius="8px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                bgcolor="grey.900"
                color="grey.500"
              >
                <MusicNoteIcon fontSize="large" />
              </Box>
            )}
            <Box>
              <Typography variant="h2">{playlist.name}</Typography>
              <Typography variant="body2" color="textSecondary">
                Playlist · {playlist.owner.display_name}
              </Typography>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};


export default Playlists;
