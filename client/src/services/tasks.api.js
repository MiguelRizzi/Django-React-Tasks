import axios from "axios";

export function getTasks() {
    return axios.get("http://127.0.0.1:8000/tasks/api/tasks/");
}