//Silvio Orozco
//Acciones de babies

import * as types from '../types/babies';
import {v4} from 'uuid'

export const addBaby = ({name,lastname}) => ({
  type: types.BABY_ADDED,
  payload:{
    id:v4(),
    name,
    lastname
  }
});

export const selectBaby = ({id}) => ({
  type: types.BABY_SELECTED,
  payload:{id}
});

