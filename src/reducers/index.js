import {combineReducers} from 'redux';
import authReducer from './authReducer';
import dietReducer from './dietReducer';

export default combineReducers({
  auth: authReducer,
  diet: dietReducer,
});
