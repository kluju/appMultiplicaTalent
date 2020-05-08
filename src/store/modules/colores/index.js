import { combineReducers } from 'redux';
import getAllServices from './colores.reducer';
import  getCopyColorReducer from './colorescopiado.reducer';

const rootReducer = combineReducers({
    getAllServices,
    getCopyColorReducer,
});

export default rootReducer;