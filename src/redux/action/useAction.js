export const FETCH_USER_LOGIN_COMPLETE = 'FETCH_USER_LOGIN_COMPLETE'
export const doLogin = (data) => {
    return {

        type: FETCH_USER_LOGIN_COMPLETE,
        payload: data

    }

}