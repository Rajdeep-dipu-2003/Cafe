import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8000/api/v1",
    timeout: 2000,
});

const RETRY_DELAY = 1000;
const MAX_RETRIES = 5;

api.interceptors.response.use(
    response => response,
    async error => {
        const config = error.config;

        if (!config) return Promise.reject(error);

        config.retryCount = config.retryCount || 0;

        // Don't retry client errors or timeout errors
        if (
            error.code === "ECONNABORTED" ||
            (error.response && error.response.status < 500)
        ) {
            return Promise.reject(error);
        }

        if (config.retryCount >= MAX_RETRIES) {
            return Promise.reject(error);
        }

        config.retryCount += 1;

        await new Promise(res => setTimeout(res, RETRY_DELAY));

        return api(config);
    }
);

export default api;
