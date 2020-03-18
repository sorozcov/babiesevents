import React from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/babies';
import { Link} from 'react-router-dom';

const SelectBaby = ({ babyOptions, selectedBaby ,onSelect}) => (
  <div style={{paddingLeft:'30px',paddingTop:'10px'}}>
     <Link to="/"><button className="w3-button w3-circle w3-red" style={{height:'70px',width:'70px'}}> +</button></Link>
 
  </div>
);


export default connect(
  (state, { index }) => ({
    babyOptions: selectors.getBabies(state),
    selectedBaby: selectors.getSelectedBaby(state), 
    
  }),
  (dispatch, { index }) => ({
     onSelect(id) {
       dispatch(dispatch(actions.selectBaby({id})));
      
    },
  }),
)(SelectBaby);
