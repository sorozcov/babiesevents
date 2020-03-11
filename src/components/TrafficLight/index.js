import React from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/trafficLights';
import * as actionsSelect from '../../actions/selectTrafficLight';
import Light from '../Light';


export const COLORS = [
  'red',
  'yellow',
  'green',
];

const TrafficLight = ({ turnedOnLight, onClick,isSelected,onClickSelect }) => (
  <div onClick={onClickSelect} className={
    `traffic-light-wrapper 
    ${isSelected ? 'traffic-light-selected' : ''}`
    }> 
    <div className="traffic-light" >
      {
        COLORS.map(
          color => (
            <Light
              key={color}
              color={color}
              isTurnedOn={color === turnedOnLight}
            />
          )
        )
      }
    </div>
    <button onClick={onClickSelect}>
      {'Cambiar!'}
    </button>
  </div>
);


export default connect(
  (state, { index }) => ({
    turnedOnLight: COLORS[selectors.getTrafficLight(state, index)],
    isSelected: selectors.getSelectedTrafficLight(state) === index, 
  }),
  (dispatch, { index }) => ({
    onClick() {
      dispatch(actions.changeTrafficLight(index));
      
    },
    onClickSelect() {
      dispatch(actionsSelect.selectTrafficLight(index));
 
      
    },
  }),
)(TrafficLight);
