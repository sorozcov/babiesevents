//Silvio Orozco
//Reducer de events

import { combineReducers } from 'redux';

import * as types from '../types/events';
import _ from 'lodash';


const byBabiesIdOrder = (state = {}, action) => {
  switch (action.type) {
    case types.EVENT_ADDED: {
      let events = null;
      if(state[action.payload.babyId]!==undefined){
         events = [...state[action.payload.babyId],action.payload.id];
      }else{
        events = [action.payload.id];
      }
      return {...state, [action.payload.babyId] : events};
    }
    case types.EVENT_DELETED: {
      return {...state, [action.payload.babyId]: state[action.payload.babyId].filter(function(eventId){ return eventId !== action.payload.id;})}
    }
    default: {
      return state;
    }
  }
};

const byEventsId = (state = {}, action) => {
  switch (action.type) {
    case types.EVENT_ADDED: {
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    }
    case types.EVENT_DELETED: {
      return _.omit(state,[action.payload.id]);
    }
    default: {
      return state;
    }
  }
};



//Combinacion de los reducers individuales de events.
const events = combineReducers({
  byBabiesIdOrder,
  byEventsId
});

//Reducer de events
export default events;

//Selectores de events
export const getEventIDsByBaby = (state, babyId) => state.byBabiesIdOrder[babyId];
export const getEvent = (state,eventId) => state.byEventsId[eventId];
export const getEventsByBaby = (state,babyId) => {
  if(state.byBabiesIdOrder[babyId]===undefined){
    return [];
  }
  return getEventIDsByBaby(state,babyId).map(
  eventId => getEvent(state,eventId),
).filter(event => event != null);
}

// estado = {
//       babies:{
//         order:[VVV3],
//         babiesById:{
//           VVV3:{silvio, orozco}
//         },
//         selectedBaby: null
//       },
//       event{
//         byBabiesId:{
//           VVV3:{
//             id1:{ notes, type, date},
//             id2:{ notes, type, date},
//             id3:{ notes, type, date},
//           }
//         },
//         byBabiesIdOrder:{
//           id:[id1,id2,id3]
//         },
//         byOrder:[],
//         byId:{

//         }
//       },
//   }