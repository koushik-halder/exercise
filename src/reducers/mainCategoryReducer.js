import {MAINCATEGORY_REQUEST, MAINCATEGORY_SECCESS, MAINCATEGORY_FAILURE } from '../action/types';

const initialState = {
    mainCategories: [],
    isFetching: false,
    errors: null
}

export default function(state = initialState, action){
    switch(action.type) {
        case MAINCATEGORY_REQUEST :
            return {
                ...state,
                isFetching: true
            }
        case MAINCATEGORY_SECCESS :
            return {
                ...state,
                isFetching: false,
                 mainCategories: action.response,
            }  
        case MAINCATEGORY_FAILURE : 
            return {
                ...state,
                isFetching: false,
            }     
        default: 
            return state;    
    }
}