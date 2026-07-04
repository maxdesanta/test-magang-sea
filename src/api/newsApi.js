import { api } from "./api";

export const newsApi = async () => {
    try { 
        const response = await api.get("/kumparan-news")
        
        return response.data.data;
    } catch (error) {
        console.log(error.message);
    }
};