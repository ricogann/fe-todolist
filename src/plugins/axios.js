import axios from "axios";
import { delCookies, getCookies } from "./cookies";

axios.defaults.headers["Content-Type"] = "application/json";

//Endpoint
const hostname = import.meta.env.VITE_BASE_API_URL;

//Instance Creation
const baseAPI = axios.create({
    baseURL: hostname,
});

//Request Config
baseAPI.interceptors.request.use(
    (config) => {
        const token = getCookies("CERT");
        if (token) config.headers["Authorization"] = `Bearer ${token}`;
        else {
            delCookies("CERT");
            delete config.headers["Authorization"];
        }

        return config;
    },
    (error) => {
        throw error;
    }
);

baseAPI.interceptors.response.use(
    (response) => response.data,
    (error) => {
        switch (error.response.status) {
            case 401:
                delCookies("CERT");
                break;

            default:
                break;
        }
        throw error?.response?.error ?? error?.response?.message ?? error;
    }
);

export { baseAPI };
