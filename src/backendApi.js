import axios from 'axios';

const host = 'http://localhost:3001/api'

export default {
    login: (email) => axios.post(`${host}/login`, { email }),
    getPerson: (userId) => axios.get(`${host}/persons/${userId}`),
    getTree: (treeId) => axios.get(`${host}/trees/${treeId}`),
    postPerson: (person) => axios.post(`${host}/persons`, person),
    postTree: (name, userId) => axios.post(`${host}/trees`, { name, userId })
}
