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

export {
    postCreateNewUser, getAllUserView,
    putUpdateUser, View, deleteUser, getUserPaginate
}