//Silvio Orozco
//Configuramos y creamos nuestro store.

import { createStore } from 'redux';
import reducer from '../reducers';

//Utilizamos local storage para que se guarde las acciones que realizamos
import { loadState,saveState } from './localStorage'
//import { clearState } from './localStorage'

//Configuramos nuestro store
export const configureStore = () => {
  //const persistedState = clearState();
  const persistedState = loadState();

  let store = createStore(reducer,{babies:persistedState.babies,events:persistedState.events});
  //let store = createStore(reducer,persistedState);
  store.subscribe(()=>{
    saveState(store.getState());
    console.log(store.getState());
  });
  return store;
}
