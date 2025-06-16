import {
  Box,
  InputAdornment,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import useSearchItemsByKeyword from "../../../hooks/useSearchItemsByKeyword";
import { SEARCH_TYPE } from "../../../models/search";
import SearchResultList from "./SearchResultList";
import LoadingSpinner from "../../../common/components/LoadingSpinner";
import { Track } from "../../../models/track";
import SearchIcon from "@mui/icons-material/Search";

const StyledTextField = styled(TextField)(({ theme }) => ({
  width: "100%",

  "& .MuiInputBase-root": {
    backgroundColor: theme.palette.action.active,
    color: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: "gray",
    },
    "&.Mui-focused fieldset": {
      borderColor: "gray",
    },
  },
}));

const SearchContainer = styled(Box)({
  padding: "16px",
  width: "100%",
  height: "100%",
  overflowY: "auto",

  "&::-webkit-scrollbar": {
    display: "none",
  },
  msOverflowStyle: "none", // IE and Edge
  scrollbarWidth: "none", // Firefox
});


interface EmptyPlaylistWithSearchProps {
  playlistId: string;
}

const EmptyPlaylistWithSearch = ({ playlistId }: EmptyPlaylistWithSearchProps) => {
  const [keyword, setKeyword] = useState<string>("");
  const {
    data,
    error,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useSearchItemsByKeyword({
    q: keyword,
    type: [SEARCH_TYPE.Track, SEARCH_TYPE.Album],
  });

  const tracks = (
    data?.pages.flatMap((page) => page.tracks?.items) ?? []
  ).filter((track): track is Track => track !== undefined);

  const hasResults = tracks.length > 0;

  const handleSearchKeyword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  return (
    <SearchContainer>
      <Typography variant="h1" my="10px">
        Let's find something for your playlist
      </Typography>
      <StyledTextField
        value={keyword}
        autoComplete="off"
        variant="outlined"
        placeholder="Search for songs or episodes"
        fullWidth
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon style={{ color: "white" }} />
              </InputAdornment>
            ),
          },
        }}
        onChange={handleSearchKeyword}
      />
      <div>
        {isLoading ? (
          <LoadingSpinner />
        ) : hasResults ? (
          <SearchResultList
            list={tracks}
            playlistId={playlistId}
            hasNextPage={hasNextPage}
            isFetchingNextPage={isFetchingNextPage}
            fetchNextPage={fetchNextPage}
          />
        ) : keyword === "" ? (
          <></>
        ) : (
          <div>{`No Result for "${keyword}"`}</div>
        )}
      </div>
    </SearchContainer>
  );
};

export default EmptyPlaylistWithSearch;
