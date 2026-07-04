import axios from "axios"

export const api = axios.create({
    baseURL: "https://berita-indo-api-next.vercel.app/api",
    headers: {
        "Content-Type": "application/json"
    }
})
