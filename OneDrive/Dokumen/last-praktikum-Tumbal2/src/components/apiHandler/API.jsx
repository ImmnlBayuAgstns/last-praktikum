import axios from "axios";

//API URL
const url = "http://localhost:5000/menu"
const userURL = "http://localhost:5000/user"

//HTTP REQUEST AND RESPONSES HANDLER
const menuAPI = {
    async get() {
        return axios
            .get(url)
            .then((res) => res.data)
            .catch((err) => err.message)
    },
    async find(id) {
        return axios
            .get(`${url}/${id}`)
            .then((res) => res)
            .catch((err) => err.message)
    },
    async edit(project) {
        return axios
            .put(`${url}/${project.id}`, project)
            .then((res) => res)
            .catch((err) => err.message)
    },
    async delete(id) {
        return axios
            .delete(`${url}/${id}`)
            .then((res) => res)
            .catch((err) => err.message)
    },
    async post(project) {
        return axios
            .post(`${url}`, project)
            .then((res) => res)
            .catch((err) => err.message)
    }
}

const userAPI = {
    async get() {
        return axios
            .get(userURL)
            .then((res) => res.data)
            .catch((err) => err.message)
    },
    async find(id) {
        return axios
            .get(`${userURL}/${id}`)
            .then((res) => res)
            .catch((err) => err.message)
    }
}

export { menuAPI, userAPI }