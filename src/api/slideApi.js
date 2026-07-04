import { api } from "./api";

export const slideApi = async () => {
    try { 
        const response = await api.get("/antara-news/terkini")
        
        return response.data.data;
    } catch (error) {
        console.log(error.message);
    }
};