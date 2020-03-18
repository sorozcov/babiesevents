//Silvio Orozco
//Acciones de events

import * as types from '../types/events';
import {v4} from 'uuid'

export const addEvent = ({type,notes,date,babyId}) => ({
  type: types.EVENT_ADDED,
  payload:{
    id:v4(),
    type,
    notes,
    date,
    babyId
  }
});

export const deleteEvent = ({id,babyId}) => ({
  type: types.EVENT_DELETED,
  payload:{id,babyId}
});




