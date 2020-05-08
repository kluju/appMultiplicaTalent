import {
    COLORS_GET_SEL_START,
    COLORS_GET_SEL_SUCCESS,
    COLORS_GET_SEL_ERROR,
    COLORS_GET_SEL_CLEAR,
    CLOSEMODAL,
} from './const';

const initialState = {
    data: [],
    error: null,
    success: false,
    errorMessage: '',
    loading: false
};

const getCopyColorReducer = (prevState = initialState, action) => {
    switch (action.type) {

        
        case COLORS_GET_SEL_START:
            return {
                ...prevState,
                dataText: [],
                loading: true,
            };

        case COLORS_GET_SEL_SUCCESS:
            var obtSinColor = prevState.data.filter(function (r) {
                return r.id != action.payload.data.id;
            });
            if(!action.payload.quitar)
                obtSinColor.push(action.payload.data);
            
            return {
                ...prevState,
                data: obtSinColor,
                loading: false,
                error: false,
                success: true,
               
            };

        case COLORS_GET_SEL_ERROR:
            return {
                ...prevState,
                loading: false,
                error: true,
                success: false,
                errorMessage: action.payload,
                
            };
        case COLORS_GET_SEL_CLEAR:
            return {
                ...prevState,
                data: [],
                error: null,
                success: null,
                errorMessage: '',
                loading: false,
                
            };
        case CLOSEMODAL:
            return {
                ...prevState,
                success: action.payload,
                
            };
    
    

        default:
            return prevState;
    }
}

export default getCopyColorReducer;