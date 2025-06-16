import React, { useEffect } from "react";
import { Track } from "../../../models/track";
import { Search } from "react-router";
import {
  Box,
  Button,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { useInView } from "react-intersection-observer";
import LoadingSpinner from "../../../common/components/LoadingSpinner";
import useAddTrackToPlaylist from "../../../hooks/useAddPlaylist";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  width: "100%",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
  "& .MuiTableCell-root": {
    borderBottom: "none",
  },
}));

const AlbumImage = styled("img")({
  borderRadius: "4px",
  marginRight: "12px",
});

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  background: theme.palette.background.paper,
  color: theme.palette.common.white,
  width: "100%",
  height: "calc(100vh - 440px)",
  overflowY: "auto",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  marginTop: "10px",
  msOverflowStyle: "none", // IE and Edge
  scrollbarWidth: "none", // Firefox
}));

interface SearchResultListProps {
  list: Track[];
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
}

const SearchResultList = ({
  list,
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
  playlistId,
}: SearchResultListProps & { playlistId: string }) => {
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage]);

  const { mutate: addTrack } = useAddTrackToPlaylist(playlistId, () => {
    console.log("Track added");
  });

  const handleAddTrack = (trackId: string) => {
    addTrack(trackId);
  };

  return (
    <StyledTableContainer>
      <Table sx={{ width: "100%" }}>
        <TableBody sx={{ width: "100%" }}>
          {list.map((track) => (
            <StyledTableRow key={track.id}>
              <TableCell>
                <Box display="flex" alignItems="center">
                  <Box>
                    <AlbumImage src={track.album?.images[0].url} width="40px" />
                  </Box>
                  <Box>
                    <Typography fontWeight={700}>{track.name}</Typography>
                    <Typography color="text.secondary">
                      {track.artists ? track.artists[0].name : "Unknown Artist"}
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell>{track.album?.name}</TableCell>
              <TableCell>
                {track.id && (
                  <Button onClick={() => handleAddTrack(track.id!)}>Add</Button>
                )}
              </TableCell>
            </StyledTableRow>
          ))}
          <TableRow>
            <TableCell colSpan={3} align="center">
              {isFetchingNextPage && <LoadingSpinner />}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default SearchResultList;
