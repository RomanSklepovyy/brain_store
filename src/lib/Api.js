import axios from "axios";

export default axios.create({
    baseURL: process.env.REACT_APP_PROXY_URL + process.env.REACT_APP_API_URL,
    responseType: "json",
    headers: {
        key: process.env.REACT_APP_API_KEY
    }
});

