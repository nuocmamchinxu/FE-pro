import axios from 'axios'
import NProgress from 'nprogress'
import { store } from '../redux/store'
NProgress.configure({
    showSpinner: false,
    trickleSpeed: 100

})

NProgress.start();
NProgress.done();
const instance = axios.create({
    baseURL: 'http://localhost:8081/',
    // timeout: 1000,
    // headers: { 'X-Custom-Header': 'foobar' }

});


instance.interceptors.request.use(function (config) {

    console.log('check store', store.getState())
    const access_token = store?.getState()?.user?.account?.access_token;
    config.headers["Authorization"] = "Bearer " + access_token;
    // Moi lan goi API se dinh kem Token vao Headers
    // Cau hinh o instance vi moi lan goi request thi no se them token vao.
    // toi u hoa = cach trc khi gui api len server se them token vao cho no.
    NProgress.start();
    return config;
}, function (error) {

    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {

    NProgress.done();
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response && response.data ? response.data : response;
}, function (error) {
    NProgress.done();
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return error && error.response && error.response.data
        ? error.response.data : Promise.reject(error);
});

export default instance;