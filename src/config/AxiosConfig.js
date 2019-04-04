import axios from "axios";

let api = axios.create({
    baseURL: process.env.REACT_APP_TODO_API
});
if (localStorage.getItem("user_token")) {
    api.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("user_token")}`;
}

export default api;