import 'babel-polyfill';
import axios from 'axios';
const api = 'https://react-ssr-api.herokuapp.com/';

export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async dispatch => {
    const res = await axios.get(api + 'users');
    console.log(res);
    dispatch({
        type: FETCH_USERS,
        payload: res
    });

};