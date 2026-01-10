import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8000/api/v1",
    timeout: 2000,
});

api.interceptors.response.use(
    response => response,
    async error => {
        const config = error.config;

        config.retryCount = config.retryCount || 0;

        if (config.retryCount >= 5) {
            return Promise.reject(error);
        }

        config.retryCount += 1;

        await new Promise(res => setTimeout(res, timeout));

        return api(config);
    }
)

export default api;