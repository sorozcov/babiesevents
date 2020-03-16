//Silvio Orozco
//Acciones de events

import * as types from '../types/events';


export const addEvent = ({id,type,notes,date,babyId}) => ({
  type: types.EVENT_ADDED,
  payload:{
    id,
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




