import axios from "axios"
import { SPOTIFY_BASE_URL } from "../configs/commonConfig"
import { GetNewReleasesResponse } from "../models/album";

export const getNewRelease = async (clientCredentialToken: string): Promise<GetNewReleasesResponse> => {
    try {
        const response = await axios.get(`${SPOTIFY_BASE_URL}/browse/new-releases?offset=0&limit=6`, {
            headers: {
                Authorization: `Bearer ${clientCredentialToken}`,
            },
        })
        return response.data;
    } catch(error) {
        throw new Error("Failed to fetch new releases");
    }
}