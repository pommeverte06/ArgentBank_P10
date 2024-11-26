import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:3001/api/v1",
});

export const login = async (credentials) => {
    const response = await API.post("/user/login", credentials);
    return response.data;
};
