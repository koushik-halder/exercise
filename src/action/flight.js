import axios from 'axios';
import { FLIGHT_REQUEST, FLIGHT_SUCCESS, FLIGHT_FAILURE} from './types';

export const loadFlights = (user) => dispatch => {
    dispatch(getFlights());
    console.log("loading flight")
    axios({
        method: 'get',
        url: 'http://mat-api-dev.mybluemix.net/admin/flight',
      }).then(res => {
                if(res.data.status === 'SUCCESS'){
                    const flights = res.data.flight
                dispatch(getFlightsSuccess(flights));
                }
                else{
                    const {errors} = res.data
                    dispatch(getFlightsFailure(errors));
                    errors.map(error =>
                        alert("Failed to authenticate the user", error.message)
                    )
                }
            })
            .catch(err => {
                dispatch(getFlightsFailure(err));
            });
}


export const getFlights = () => {
    return {
        type: FLIGHT_REQUEST
    }
}


export const getFlightsSuccess = (response) => {
    return {
        type: FLIGHT_SUCCESS,
        response

    }
}

export const getFlightsFailure = (errors) => {
    return {
        type: FLIGHT_FAILURE,
        errors: errors
    }
}

