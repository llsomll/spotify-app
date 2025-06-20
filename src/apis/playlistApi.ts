import { GetCurrentUserPlaylistResponse, GetCurrentUserPlaylistRequest, CreatePlaylistRequest, Playlist } from "../models/playlist";
import api from "../utils/api";

export const getCurrentUserPlaylists = async ({limit, offset}: GetCurrentUserPlaylistRequest): Promise<GetCurrentUserPlaylistResponse> => {
    try {
        const response = await api.get('/me/playlists', {
            params: {limit, offset}
        });
        return response.data;
    } catch (error) {
        throw new Error("Failed to fetch current user playlists");
    }
}


export const createPlaylist = async (user_id: string, params: CreatePlaylistRequest ): Promise<Playlist> => {
    try {
        const { name, playlistPublic, collaborative, description } = params;
        const response = await api.post(`/users/${user_id}/playlists`, {
            name, public: playlistPublic, collaborative, description
        })
        return response.data
    } catch (error) {
        throw new Error("Failed to create playlist")
    }
}