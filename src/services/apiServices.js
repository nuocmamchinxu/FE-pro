import axios from '../ultis/axiosFullHD'
// API them moi
const postCreateNewUser = (email, password, username, role, avatar) => {
    //   submit data
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('username', username);
    data.append('role', role);
    data.append('userimage', avatar);
    return axios.post('api/v1/participant', data)
}
// API hien thi bang
const getAllUserView = () => {
    return axios.get('api/v1/participant/all')
}
// API Updata
const putUpdateUser = (id, username, role, avatar) => {
    //   submit data
    const data = new FormData();
    data.append('id', id);
    data.append('username', username);
    data.append('role', role);
    data.append('userimage', avatar);
    return axios.put('api/v1/participant', data)
}
// API hien thi chi tiet
const View = (email, password, username, role, avatar) => {
    //   submit data
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('username', username);
    data.append('role', role);
    data.append('userimage', avatar);
    return axios.post('api/v1/participant', data)
}
// API Delete
const deleteUser = (userID) => {
    return axios.delete('api/v1/participant', { data: { id: userID } })
}

const getUserPaginate = (page, limit) => {
    return axios.get(`api/v1/participant?page=${page}&limit=${limit}`)
}

const postLogin = (email, password) => {
    return axios.post(`http://localhost:8081/api/v1/login`, { email, password, delay: 3000 }
    )
}
const postRegister = (email, password, username) => {
    return axios.post(`/api/v1/register`, { email, password, username, }
    )
}
const getQuizByUser = () => {
    return axios.get('/api/v1/quiz-by-participant')
}
const getDataQuiz = (id) => {
    return axios.get(`/api/v1/questions-by-quiz?quizId=${id}`)
}
export {
    postCreateNewUser, getAllUserView,
    putUpdateUser, View, deleteUser, getUserPaginate, postLogin, postRegister, getQuizByUser, getDataQuiz
}