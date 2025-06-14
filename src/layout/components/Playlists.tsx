import React from "react";
import { Box, Typography, ListItemButton } from "@mui/material";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { SimplifiedPlaylist } from "../../models/playlist";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

type PlaylistsProps = {
  playlists: SimplifiedPlaylist[];
};

const Playlists = ({ playlists }: PlaylistsProps) => {
  const navigate = useNavigate();
  const handleClick = (id: string) => {
    navigate("/playlist/${id}");
  };

  return (
    <Box display="flex" flexDirection="column" gap={1}>
      {playlists.map((playlist) => {
        const imageUrl = playlist.images?.[0]?.url;
        return (
          <ListItemButton
            key={playlist.id}
            component={NavLink}
            to={`/playlist/${playlist.id}`}
            sx={{
              borderRadius: 1,
              gap: 2,
              color: "text.secondary",
              "&.active": {
                backgroundColor: "action.selected",
                color: "primary.main",
              },
            }}
          >
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={playlist.name}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 8,
                  objectFit: "cover",
                }}
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
              <Typography variant="body2" color="text.secondary">
                Playlist · {playlist.owner.display_name}
              </Typography>
            </Box>
          </ListItemButton>
        );
      })}
    </Box>
  );
};

export default Playlists;
