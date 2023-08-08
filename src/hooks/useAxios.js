import axios from "axios";

export const useAxios = () => {
    const instance = axios.create({
        baseURL: "http://api.learn-coding.xyz:8080/",
        timeout: 5000,
        headers: {
            "Content-Type": "application/json"
        },
        responseType: "json",
        responseEncoding: "utf8"
    });
    return instance;
};