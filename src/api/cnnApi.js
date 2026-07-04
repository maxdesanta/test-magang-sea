import { api } from "./api";

export const cnnApi = async (endpoint) => {
    try { 
        const response = await api.get(`/cnn-news/${endpoint}`)
        
        return response.data.data;
    } catch (error) {
        console.log(error.message);
    }
};