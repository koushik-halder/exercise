import { SUBCATEGORY_REQUEST, SUBCATEGORY_SUCCESS, SUBCATEGORY_FAILURE } from  '../action/types';

const initialState = {
    subCategory : [],
    isFetching : false,
    errors : null
}
export default function(state =initialState, action) {
    switch(action.type){
        case SUBCATEGORY_REQUEST :
            return {
                ...state,
                isFetching: true
            }
        case SUBCATEGORY_SUCCESS :
            return {
                ...state,
                isFetching: false,
                subCategory: action.response,
            }    
        case SUBCATEGORY_FAILURE :
            return {
                ...state,
                isFetching: false,
            }  
         default: 
            return state;      
    }
}