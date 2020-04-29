import { FLIGHT_REQUEST, FLIGHT_SUCCESS,FLIGHT_FAILURE} from '../action/types';

const initialState = {
     flights : [],
    searchPlan : [],
    isFetching : false,
    errors : null

}

export default function(state = initialState, action ) {
    switch(action.type) {
        case FLIGHT_REQUEST:
            return {
                ...state,
                isFetching: true,
            }
            case FLIGHT_SUCCESS:
            return {
                ...state,
                isFetching: false,
                flights: action.response,
            }
            case FLIGHT_FAILURE:
            return {
                ...state,
                isFetching: false,
                errors : action.errors,
            }
        default: 
            return state;
    }
}
