import { useInfiniteQuery } from "@tanstack/react-query";
import { GetCurrentUserPlaylistRequest } from "../models/playlist"
import { getCurrentUserPlaylists } from "../apis/playlistApi";

const useGetCurrentUserPlaylists = ({limit}: GetCurrentUserPlaylistRequest) => {
    return useInfiniteQuery({
        queryKey: ['current-user-playlists'],
        queryFn: ({ pageParam = 0 }) => {
            return getCurrentUserPlaylists({ limit, offset: pageParam })
        },
        initialPageParam: 0,
        getNextPageParam: (lastPage) => {
            if(lastPage.next){
                const url = new URL(lastPage.next);
                const nextOffset = url.searchParams.get('offset');
                return nextOffset ? parseInt(nextOffset, 10) : undefined; // Return undefined if no next page
            }
            return undefined;
        }
    })
}

export default useGetCurrentUserPlaylists;



