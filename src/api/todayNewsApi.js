import { api } from "./api";

export const todayNewsApi = async () => {
    try { 
        const response = await api.get("/republika-news/news")
        
        return response.data.data;
    } catch (error) {
        console.log(error.message);
    }};