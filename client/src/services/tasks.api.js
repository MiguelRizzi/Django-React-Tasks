import axios from "axios";

const taskApi = axios.create({
    baseURL: "http://127.0.0.1:8000/tasks/api/tasks/",
})

export function getTasks() {
    return taskApi.get("/");
}

export function getTaskById(id) {
    return taskApi.get(`/${id}/`);
}

export function createTask(task) {
    return taskApi.post("/", task);
}

export function deleteTask(id) {
    return taskApi.delete(`/${id}`);
}

export function updateTask(id, task) {
    return taskApi.put(`/${id}/`, task);
}