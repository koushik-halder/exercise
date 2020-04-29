import axios from 'axios';
import { SUBCATEGORY_REQUEST, SUBCATEGORY_SUCCESS, SUBCATEGORY_FAILURE } from  './types';

export const loadSubcategory =(user)=> dispatch => {
    dispatch(getSubcategory());
    axios({
        method: 'get',
        url: 'http://mat-api-dev.mybluemix.net/admin/subCategory',
    }).then(res=> {
        if(res.data.status === 'SUCCESS'){
            const subCategory = res.data.subCategory
            dispatch(getSubcategorySuccess(subCategory));
            console.log("datatwo" , subCategory)
        }else {
            const {errors} = res.data
            dispatch(getSubcategoryFailure(errors));
            errors.map( error=>
                alert("failed to error" , errors.message)    
            )
        }
    }).catch(err => {
        dispatch(getSubcategoryFailure(err));
    })
}
export const getSubcategory =()=> {
    return {
        type: SUBCATEGORY_REQUEST
    }
}
export const getSubcategorySuccess =(response)=> {
    return {
        type: SUBCATEGORY_SUCCESS,
        response
    }
}
export const getSubcategoryFailure =(errors)=> {
    return {
        type: SUBCATEGORY_FAILURE,
        errors
    }
}