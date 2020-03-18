import React from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/events';



const ShowEvents = ({ events ,deleteEvent,selectedBaby}) => (
  <div className="events">

 
  {
    events.length === 0 ? (
     <h1>
       {'No hay eventos. :('}
    </h1>
     ) : (
      events.reverse().map((event, index) =>(

        <div className="w3-card-4" style={{paddingBottom:'20px'}} key={event.id}>

          <header className="w3-container w3-blue">
          
              <h2>Evento {index + 1}</h2>
            
            
          </header>

          <div className="w3-container w3-white w3-center">
            <p>
              Tipo: {event.type}
            </p>
            <p>  
              Notas: {event.notes}            
            </p>
          </div>

          <footer className="w3-container w3-blue w3-center">
            <div style={{display:"flex",flexDirection:"column"}}>
            <h5><Moment format="LLL">
                    {event.date}
                </Moment></h5>

                <div style={{paddingTop:'15px',paddingBottom:'5px',alignSelf:'flex-end'}}><button onClick={()=>deleteEvent(event.id,selectedBaby)} className="w3-button w3-circle w3-red w3-right" >-</button></div>
              </div>
          </footer>
          

        </div>
      ))
   )
   }  
   </div>
);


export default connect(
  (state, { index }) => ({
    events: selectors.getEventsByBabySelected(state),
    selectedBaby: selectors.getSelectedBaby(state)
    
    
  }),
  (dispatch, state) => ({
     deleteEvent: (id,babyId) =>{
       dispatch(dispatch(actions.deleteEvent({id,babyId})));
      
    },
    // onClickSelect() {
    //   dispatch(actionsSelect.selectTrafficLight(index));
 
      
    // },
  }),
)(ShowEvents);
