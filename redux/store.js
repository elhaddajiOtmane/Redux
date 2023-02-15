// importing redux
import {creatStore} from 'redux'
import CounterReducer from './reducer/counterReducer';

export const store = creatStore(CounterReducer);
