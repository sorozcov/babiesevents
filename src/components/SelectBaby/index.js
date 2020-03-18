import React from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/babies';


const SelectBaby = ({ babyOptions, selectedBaby ,onSelect}) => (
  <div >
  <select  value={selectedBaby} style={{width:'600px',height:"60px"}} onChange={e => onSelect(e.target.value)}>
    
    {babyOptions.map((baby) =>(

      <option value={baby.id} key={baby.id}>
        {baby.name} {baby.lastname}
      </option>
    ))}
  
  </select>
  
  </div>
);


export default connect(
  (state, { index }) => ({
    babyOptions: selectors.getBabies(state),
    selectedBaby: selectors.getSelectedBaby(state), 
    
  }),
  (dispatch, { index }) => ({
     onSelect(id) {
       console.log(dispatch(dispatch(actions.selectBaby({id}))));
      
    },
  }),
)(SelectBaby);
