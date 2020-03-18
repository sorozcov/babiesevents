import React from 'react';


import './styles.css';

import SelectBaby from '../SelectBaby';
import FormCreateEvent from '../FormCreateEvent';
import ShowEvents from '../ShowEvents';
import AddBabyButton from '../AddBabyButton';





export default () => (
    <div >
      <div >
        <center>
          <h1 style={{fontSize:'60px'}}> Babies App </h1>  
        </center>
      </div>
      <div className="container-events">
        <div className="events">
            <div style={{flexDirection:"row",display:"flex"}}>
              <SelectBaby/>
              <AddBabyButton/>
            </div>
            <ShowEvents/>
        </div>
        <div className="new-event">
          
            <FormCreateEvent/>
        </div>
    </div>
   </div>
);


// export default connect(
//   (state, { index }) => ({
//     // turnedOnLight: COLORS[selectors.getTrafficLight(state, index)],
//     // isSelected: selectors.getSelectedTrafficLight(state) === index, 
//   }),
//   (dispatch, { index }) => ({
//     // onClick() {
//     //   dispatch(actions.changeTrafficLight(index));
      
//     // },
//     // onClickSelect() {
//     //   dispatch(actionsSelect.selectTrafficLight(index));
 
      
//     // },
//   }),
// )(events);
