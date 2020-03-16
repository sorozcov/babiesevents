//Silvio Orozco
//Reducer de babies

import { combineReducers } from 'redux';
import {v4} from 'uuid'
import * as types from '../types/babies';



const orderBabies = (state = [], action) => {
  switch (action.type) {
    case types.BABY_ADDED: {
      let id = v4();
      action.payload.id = id;
      return [...state, action.payload.id];
    }
    default: {
      return state;
    }
  }
};

const babiesById = (state = {}, action) => {
  switch (action.type) {
    case types.BABY_ADDED: {
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

const selectedBaby = (state = null, action) => {
  switch (action.type) {
    case types.BABY_SELECTED: {
      return action.payload.id;
    }
    default: {
      return state;
    }
  }
};

//Combinacion de los reducers individuales del bebe.
const babies = combineReducers({
  orderBabies,
  babiesById,
  selectedBaby
});

//Reducer de babies
export default babies;

//Selectores de babies
export const getBaby = (state, id) => state.babiesById[id];
export const getBabies = state => state.order.map(
  id => getBaby(state, id),
).filter(baby => baby != null);
export const getSelectedBaby = state => state.selectedBaby;
