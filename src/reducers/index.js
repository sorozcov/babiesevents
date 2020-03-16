//Silvio Orozco
//Reducer de aplicacion

import { combineReducers } from 'redux';

import babies, * as babiesSelectors from './babies';
import events, * as eventsSelectors from './events';



const reducer = combineReducers({
  babies,
  events
});

//Reducer final combinando babies y events
export default reducer;

//todos los selectores
//Selectores de events
export const getEventIDsByBaby = (state,babyId) => eventsSelectors.getEventIDsByBaby(state.events,babyId);
export const getEvent = (state,eventId) => eventsSelectors.getEvent(state.events,eventId);
export const getEventsByBaby = (state,babyId) => eventsSelectors.getEventsByBaby(state.events,babyId);

//Selectores de babies
export const getBaby = (state,babyId) => babiesSelectors.getBaby(state.babies,babyId);
export const getBabies = (state) => babiesSelectors.getBabies(state.babies);
export const getSelectedBaby = (state) => babiesSelectors.getSelectedBaby(state.babies);

//Selector de eventos por bebe seleccionado
export const getEventsByBabySelected = (state) => eventsSelectors.getEventsByBaby(state.events,state.babies.selectedBaby);

