import axios from 'axios';

const host = 'http://localhost:3001/api'

export default {
    getSelf: (email) => axios.get(`${host}/persons/${email}`),
    postPerson: (person) => axios.post(`${host}/persons`, person)
}