

import { createStore } from 'redux'
import { addReducer } from './../reducers/reducer';

export const store = createStore(addReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); //запись которая покажет твой стор в браузере в расширении