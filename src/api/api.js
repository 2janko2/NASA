import axios from "axios";

const axiosInstance = axios.create({
    async: true,
    crossDomain: true,
    baseURL: "https://images-api.nasa.gov",
});

export const nasaAPI = {
    getSearchResult(keyword) {
        return axiosInstance.get(`/search?q=${keyword}&media_type=image&`).then((response) => {
            return response.data;
        });
    },
};
