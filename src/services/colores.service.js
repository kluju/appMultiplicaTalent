import axios from 'axios';
import { API_HOST } from './config';

const MODULE = 'search';
let commentsAjax = null;
export const getColores = (page = '') => {
    return new Promise((resolve, reject) => {
        let pagination = "";
        if (page != null)
            pagination = "?page="+page;
        axios.get(`${API_HOST}/colors${pagination}`, {
            /*headers: {
                authorization: `bearer ${jwt}`,
            }*/
        }).then(data => {
            resolve(data.data);
            
        }).catch(err => reject(err.message));


    })
}
