import axios from 'axios';
import { MAINCATEGORY_REQUEST, MAINCATEGORY_SECCESS, MAINCATEGORY_FAILURE} from './types';

export const loadMainCategories = () => dispatch => {
    dispatch(getmainCategories());
    console.log("loaading main categories")
    axios({
        method: 'get',
        url: 'http://mat-api-dev.mybluemix.net/admin/mainCategory',
      }).then(res => {
                if(res.data.status === 'SUCCESS'){
                    const mainCategory = res.data.mainCategory
                dispatch(getmainCategoriesSuccess(mainCategory));
                }
                else{
                    const {errors} = res.data
                    dispatch(getmainCategoriesFailure(errors));                }

            })
            .catch(err => {
                dispatch(getmainCategoriesFailure(err));
            });
}


export const getmainCategories = () => {
    return {
        type: MAINCATEGORY_REQUEST

    }
}

export const getmainCategoriesSuccess = (response) => {
    return {
        type: MAINCATEGORY_SECCESS,
        response

    }
}

export const getmainCategoriesFailure = (errors) => {
    return {
        type: MAINCATEGORY_FAILURE,
        errors: errors
    }
}

