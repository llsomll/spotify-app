import {
  GetPlaylistItemsRequest,
  GetPlaylistItemsResponse,
  GetPlaylistRequest,
  Playlist,
  PlaylistTrack,
} from "../models/playlist";
import { User } from "../models/user";
import api from "../utils/api";

export const getCurrentUserProfile = async (): Promise<User> => {
  try {
    const response = await api.get("/me");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch user profile");
  }
};

export const getPlaylist = async (
  params: GetPlaylistRequest
): Promise<Playlist> => {
  try {
    const response = await api.get(`/playlists/${params.playlist_id}`, {
      params,
    });
    return response.data;
  } catch (error: any) {
    const err = new Error("Failed to fetch playlist detail") as any;
    err.status = error.response?.status;
    throw err;
  }
};

export const getPlaylistItems = async (
  params: GetPlaylistItemsRequest
): Promise<GetPlaylistItemsResponse> => {
  try {
    const response = await api.get(`/playlists/${params.playlist_id}/tracks`, {
      params,
    });
    return response.data;
  } catch (error: any) {
    const err = new Error("Failed to fetch playlist items") as any;
    err.status = error.response?.status;
    throw err;
  }
};
