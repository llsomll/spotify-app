import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTrackToPlaylist } from "../apis/playlistApi";

const useAddTrackToPlaylist = (
  playlistId: string,
  onSuccess?: () => void
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (trackId: string) =>
      addTrackToPlaylist({
        playlist_id: playlistId,
        track_uri: `spotify:track:${trackId}`,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["current-user-playlists"] });
      queryClient.invalidateQueries({ queryKey: ["playlist-items", playlistId] });
      
      onSuccess?.(); 
    },
  });
};

export default useAddTrackToPlaylist