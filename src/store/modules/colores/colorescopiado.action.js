import {
    COLORS_GET_SEL_START,
    COLORS_GET_SEL_SUCCESS,
    COLORS_GET_SEL_ERROR,
    COLORS_GET_SEL_CLEAR,
    CLOSEMODAL,
} from './const';


import { array } from 'prop-types';


const startActionCreator = () => ({
    type: COLORS_GET_SEL_START,
    payload: null,
})
const clearActionCreator = () => ({
    type: COLORS_GET_SEL_CLEAR,
    payload: null,
})

const successActionCreator = (data,quitar) => {
    
    return {type: COLORS_GET_SEL_SUCCESS,
    payload: {data:data,quitar:quitar},}
}
const errorActionCreator = (data) => ({
    type: COLORS_GET_SEL_ERROR,
    payload: [],
})
const openCloseModalActionCreator = (valor) => ({
    type: CLOSEMODAL,
    payload: valor,
})

export const getColoresSeleccionadosCreator = (objColors,quitar) => {
    
    return (dispatch, getStore) => {
        dispatch(startActionCreator());
        //const jwt = getStore().auth.login.data;
        dispatch(successActionCreator(objColors,quitar));
    }
}
export const openCloseModalCreator = (objColors) => {
    
    return (dispatch, getStore) => {
        dispatch(openCloseModalActionCreator());
    }
}