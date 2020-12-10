import axios from "axios";
const proxyurl = "https://cors-anywhere.herokuapp.com/";

export default axios.create({
    baseURL: proxyurl + process.env.REACT_APP_API_URL,
    responseType: "json",
    headers: {
        key: process.env.REACT_APP_API_KEY
    }
});

