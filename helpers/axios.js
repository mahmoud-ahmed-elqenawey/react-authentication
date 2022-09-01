import axios from "axios";

const baseURL = process.env.PUBLIC_URL;

console.log("PUBLIC_URL", baseURL);

let headers = {};

if (localStorage.token) {
    headers.Authorization = `Bearer ${localStorage.token}`;
}

const API = axios.create(baseURL, headers);

export default API;
