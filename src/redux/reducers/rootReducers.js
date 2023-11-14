import { combineReducers } from 'redux';
import { stockReducer } from './stockReducer';

//3. Reducer que une todos los reducers para hacer el provide del context

export const rootReducer = combineReducers({
    stock: stockReducer
})