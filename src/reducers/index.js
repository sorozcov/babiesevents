import { combineReducers } from 'redux';

import babies, * as babiesSelectors from './babies';
import events, * as eventsSelectors from './events';



const reducer = combineReducers({
  babies,
  events
});


export default reducer;

//faltan selectors
export const getTrafficLight = (
  state,
  index,
) => trafficLightsSelectors.getTrafficLight(state.trafficLights, index);
export const getTrafficLights = state => trafficLightsSelectors.getTrafficLights(
  state.trafficLights,
);

export const getAgent = (state, id) => pmtSelectors.getAgent(state.pmt, id);
export const getAgents = state => pmtSelectors.getAgent(state.pmt);

export const getAssignedTrafficLight = (
  state,
  agentId,
) => pmtToTrafficLightsSelectors.getAssignedTrafficLight(
  state.pmtToTrafficLights,
  agentId,
);

export const getSelectedTrafficLight = state => selectedTrafficLightSelectors.getSelectedTrafficLight(state.selectedTrafficLight);
