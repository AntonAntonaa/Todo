

import { createStore } from 'redux'
import { Reducers } from './../reducers/reducer';

export const store = createStore(Reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
 //запись которая покажет твой стор в браузере в расширении