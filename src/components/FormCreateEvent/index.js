//Silvio Orozco
//Form para crear un evento con redux-form

import React from 'react';
import { connect } from 'react-redux';
import {reduxForm, Field,reset} from 'redux-form';
import './styles.css';
import * as actions from '../../actions/events';
import * as selectors from '../../reducers';


//Render textarea
const renderTextArea = ({input, meta: { touched, error, warning }}) => (
  <div >
      <label>Notas</label>
      <div style={{paddingBottom:'30px'}}>
          
          <textarea {...input} placeholder="Notas..." rows="5" cols="40"></textarea>
          {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
  </div>
);


let createEventForm = ({handleSubmit, valid, selectedBaby,submitEvent}) => {

  return (
    
    <form onSubmit={handleSubmit} style={{paddingBottom:'100px'}}>
       
        <div className="form-create-event w3-red" >
          <center>
          
          <h1 style={{fontSize:'40px'}}>  Crear nuevo evento  </h1>
          <Field name="selectedBaby" value={selectedBaby} component="input" type="text" hidden></Field>
          <div style={{fontSize:'20px',paddingBottom:'80px',width:'300px',height:'40px'}}> 
            <label>Tipo de Evento </label>
            <Field name="type" component="select">
                
                <option value="Siesta">Siesta</option>
                <option value="Pacha">Pacha</option>
                <option value="Cambio de pañal Popo">Cambio de pañal Popo</option>
                <option value="Cambio de pañal Pipi">Cambio de pañal Pipi</option>
                <option value="Pecho">Pecho</option>
            </Field>
          </div>
          <Field name="notes"  label="Notas" component={renderTextArea} style={{fontSize:'30px',fontFamily: 'sans-serif'}} /> 
          
          <button type="submit" disabled={!valid || selectedBaby===null } className="w3-button w3-blue w3-border w3-border-black w3-round-large" style={{width:'200px',height:'50px'}}>
             Crear evento
          </button>
          </center>
        
      </div>
      
    </form>
  );
} 


const form = reduxForm({
  form: 'createEventForm',
  onSubmit: function submit(values, dispatch) {
    
    let  currentDate = new Date();
    

    dispatch(actions.addEvent({type:values.type,notes:values.notes,date:currentDate,babyId:values.selectedBaby}));
    return dispatch(reset('createEventForm'));
  },
  enableReinitialize: true
})(createEventForm);


//Exportar deafault con connect y valores iniciales del estado
export default connect(
  state => ({
      selectedBaby: selectors.getSelectedBaby(state),
      initialValues:{selectedBaby: selectors.getSelectedBaby(state), type:"Siesta", notes:""}
  }),
  (dispatch, state) => ({
    
  }),
    
)(form);
