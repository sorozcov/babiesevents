//Silvio Orozco
//Acciones de babies

import * as types from '../types/babies';


export const addBaby = ({id,name,lastname}) => ({
  type: types.BABY_ADDED,
  payload:{
    id,
    name,
    lastname
  }
});

export const selectBaby = (id) => ({
  type: types.BABY_SELECTED,
  payload:{id}
});

