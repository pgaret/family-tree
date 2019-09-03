import axios from 'axios';

const host = 'http://localhost:3001/api'

export default {
    login: (email) => axios.post(`${host}/login`, email),
    getSelf: (email) => axios.get(`${host}/persons/${email}`),
    postPerson: (person) => axios.post(`${host}/persons`, person),
    postTree: (tree, userId) => axios.post(`${host}/trees`, { tree, userId })
}