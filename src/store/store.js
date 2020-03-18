//Silvio Orozco
//Configuramos y creamos nuestro store.

import { createStore } from 'redux';
import reducer from '../reducers';

//Utilizamos local storage para que se guarde las acciones que realizamos
import { loadState,saveState } from './localStorage'


//Configuramos nuestro store
export const configureStore = () => {

  const persistedState = loadState();

  let store = createStore(reducer,{babies:persistedState.babies,events:persistedState.events});

  store.subscribe(()=>{
    saveState(store.getState());
    console.log(store.getState());
  });
  return store;
}
