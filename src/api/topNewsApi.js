import { api } from "./api";

export const topNewsApi = async (endpoint) => {
    try { 
        const response = await api.get(`/antara-news/${endpoint}`)
        
        return response.data.data;
    } catch (error) {
        console.log(error.message);
    }};