import { combineReducers } from 'redux';
import subCategoryReducer from './subCategoryReducer';
import flightReducer from './flightReducer';
import mainCategoryReducer from './mainCategoryReducer'

export default combineReducers({
    subCategory: subCategoryReducer,
    flight: flightReducer,
    mainCategory: mainCategoryReducer
});