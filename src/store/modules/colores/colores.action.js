import {
    COLORS_GET_ALL_START,
    COLORS_GET_ALL_SUCCESS,
    COLORS_GET_ALL_ERROR,
    COLORS_GET_ALL_CLEAR,

} from './const';

import { getColores } from '../../../services/colores.service';
import { array } from 'prop-types';


const startActionCreator = () => ({
    type: COLORS_GET_ALL_START,
    payload: null,
})
const clearActionCreator = () => ({
    type: COLORS_GET_ALL_CLEAR,
    payload: null,
})

const successActionCreator = (data) => {
    
    return {type: COLORS_GET_ALL_SUCCESS,
    payload: data,}
}
const errorActionCreator = (data) => ({
    type: COLORS_GET_ALL_ERROR,
    payload: [],
})

export const getColoresCreator = (page) => {
    return (dispatch, getStore) => {
        dispatch(startActionCreator());
        //const jwt = getStore().auth.login.data;
        getColores(page).then(data => {
            dispatch(successActionCreator(data));
        }).catch(err => {
            dispatch(errorActionCreator(err));
        }); 
    }
}
