import React, { useEffect } from "react";
import EmptyPlayList from "./EmptyPlayList";
import useGetCurrentUserPlaylists from "../../hooks/useGetCurrentUserPlaylists";
import { Typography, Box, styled } from "@mui/material";
import Playlists from "./Playlists";
import LoadingSpinner from "../../common/components/LoadingSpinner";
import ErrorMessage from "../../common/components/ErrorMessage";
import useGetCurrentUserProfile from "../../hooks/useGetCurrentUserProfile";
import { useInView } from "react-intersection-observer";

const PlaylistContainer = styled("div")(({theme}) => ({
  overflowY: "auto",
  maxHeight: "calc(100vh - 210px)",
  height: "100%",
  "&::-webkit-scrollbar": {
    display: "none", // Hide scrollbar for Webkit browsers
    msOverflowStyle: "none", // Hide scrollbar for Internet Explorer and Edge
    scrollbarWidth: "none", // Hide scrollbar for Firefox
  },
  [theme.breakpoints.down("sm")]: {
    maxHeight: "calc(100vh - 65px - 119px)", // Adjust height for smaller screens
  },
}));

const Library = () => {
  const { ref, inView } = useInView();
  const {
    data,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    isLoadingError,
    error,
  } = useGetCurrentUserPlaylists({
    limit: 10,
  });
  const { data: user } = useGetCurrentUserProfile();

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  if (!user) return <EmptyPlayList />;
  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (error) {
    return <ErrorMessage errorMessage={error.message} />;
  }

  return (
    <PlaylistContainer>
      {!data || data.pages[0].total === 0 ? (
        <EmptyPlayList />
      ) : (
        <Box
          sx={{
            flex: 1,
            overflowY: "scroll",
            minHeight: 0,
            pr: 1,
            scrollbarWidth: "none", // Firefox
            "&::-webkit-scrollbar": {
              display: "none", // Chrome, Safari
            },
          }}
        >
          {data?.pages.map((page, index) => (
            <Playlists key={index} playlists={page.items} />
          ))}
          <div ref={ref}>{isFetchingNextPage && <LoadingSpinner />}</div>
        </Box>
      )}
    </PlaylistContainer>
  );
};

export default Library;
