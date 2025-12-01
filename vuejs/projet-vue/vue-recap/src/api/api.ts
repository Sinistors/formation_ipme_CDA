import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

api.interceptors.request.use((config) =>
{
    config.headers['Content-Type'] = "application/json";
    config.headers['Accept'] = "application/json";

    const token = localStorage.getItem("token");

    if (token !== null)
    {
        config.headers["Authorization"] = 'Bearer ' + token;
    }

    return config;
});

api.interceptors.response.use((response) => response, (error) => {
    const token = localStorage.getItem('token');
    if (token && error.response.status === 401)
    {
        localStorage.removeItem('token');
        window.location.href = "/login";
    }
});

export default api;