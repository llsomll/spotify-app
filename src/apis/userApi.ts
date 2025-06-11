import { GetPlaylistRequest } from "../models/playlist";
import { User } from "../models/user";
import api from "../utils/api";

export const getCurrentUserProfile = async ():Promise<User> => {
    try {
        const response = await api.get('/me');
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch user profile');
    }
}

export const getPlaylist = async (params: GetPlaylistRequest) => {
    try {
        const response = await api.get(`/playlists/${params.playlist_id}`, {
            params,
        });
        return response.data;
    } catch(error) {
        throw new Error("Failed to fetch playlist detail")
    }
}