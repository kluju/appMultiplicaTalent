import {
    COLORS_GET_ALL_START,
    COLORS_GET_ALL_SUCCESS,
    COLORS_GET_ALL_ERROR,
    COLORS_GET_ALL_CLEAR,

} from './const';

const initialState = {
    data: [],
    error: null,
    success: null,
    errorMessage: '',
    loading: false,
    page:0,
    per_page:0,
    total:0,
    total_pages:0,
};

const getAllReducer = (prevState = initialState, action) => {
    switch (action.type) {

        
        case COLORS_GET_ALL_START:
            return {
                ...prevState,
                dataText: [],
                loading: true,
            };

        case COLORS_GET_ALL_SUCCESS:
            return {
                ...prevState,
                data: action.payload.data,
                loading: false,
                error: false,
                success: true,
                page:action.payload.page,
                per_page:action.payload.per_page,
                total:action.payload.total,
                total_pages:action.payload.total_pages,
            };

        case COLORS_GET_ALL_ERROR:
            return {
                ...prevState,
                loading: false,
                error: true,
                success: false,
                errorMessage: action.payload,
                page:0,
                per_page:0,
                total:0,
                total_pages:0,
            };
        case COLORS_GET_ALL_CLEAR:
            return {
                ...prevState,
                data: [],
                error: null,
                success: null,
                errorMessage: '',
                loading: false,
                page:0,
                per_page:0,
                total:0,
                total_pages:0,
            };
        
        

        default:
            return prevState;
    }
}

export default getAllReducer;