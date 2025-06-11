import React from "react";
import { Navigate, useParams } from "react-router-dom";
import useGetPlaylist from "../../hooks/useGetPlaylist";
import { Box, GridLegacy as Grid, styled, Typography } from "@mui/material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import DefaultImage from "../../common/components/DefaultImage";

const PlaylistHeader = styled(Grid)({
  display: "flex",
  alignItems: "center",
  padding: "16px",
});

const ImageGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
}));

const AlbumImage = styled("img")(({ theme }) => ({
  borderRadius: "8px",
  height: "auto",
  width: "100%",
  maxWidth: 240,

  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
  },
}));

const ResponsiveTypography = styled(Typography)(({ theme }) => ({
  fontSize: "3rem",
  textAlign: "left",

  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
  },
}));

const PlayListDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  if (id === undefined) return <Navigate to="/" />;
  const { data: playlist } = useGetPlaylist({ playlist_id: id });

  console.log("ddd", playlist);

  return (
    <div>
      <PlaylistHeader container spacing={7}>
        <ImageGrid item sm={12} md={2}>
          {playlist?.images ? (
            <AlbumImage
              src={playlist?.images[0].url}
              alt="playlist_cover.jpg"
            />
          ) : (
            <DefaultImage>
              <MusicNoteIcon sx={{ fontSize: "4rem", color: "grey.500" }} />
            </DefaultImage>
          )}
        </ImageGrid>
        <Grid item sm={12} md={10}>
          <Box>
            <ResponsiveTypography variant="h1" color="white">
              {playlist?.name}
            </ResponsiveTypography>
            <Box display="flex" alignItems="center">
              <img
                src="https://i.scdn.co/image/ab67757000003b8255c25988a6ac314394d3fbf5"
                width="20px"
              />
              <Typography
                variant="subtitle1"
                color="white"
                ml={1}
                fontWeight={700}
              >
                {playlist?.owner?.display_name
                  ? playlist?.owner.display_name
                  : "unknown"}
              </Typography>
              <Typography variant="subtitle1" color="white">
                • {playlist?.tracks?.total} songs
              </Typography>
            </Box>
          </Box>
        </Grid>
      </PlaylistHeader>
    </div>
  );
};

export default PlayListDetailPage;
