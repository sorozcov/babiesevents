import React from 'react';
import { connect } from 'react-redux';
import {reduxForm, Field,reset} from 'redux-form';
import './styles.css';
import * as actions from '../../actions/babies';
import * as selectors from '../../reducers';
import { withRouter } from "react-router-dom";

const required = value => value ? undefined : 'Requerido'
const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div style={{fontSize:'30px',paddingBottom:'20px'}}>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}  />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)


let createBabyForm = ({handleSubmit, valid,numberBabies}) => {

  return (
    
    <form onSubmit={handleSubmit}>
       <div >
        <center>
          <h1 style={{fontSize:'60px'}}> Babies App </h1>  
        </center>
        </div>
        <div className="form-create w3-blue">
          <center>
          {
           numberBabies === 0 ? (
            <h1>
              {'No hay bebes. :('}
           </h1>
          ) : null
          }  
          <h1 style={{fontSize:'50px'}}>  Crear nuevo bebe  </h1>
          
          <Field name="name" validate={required} label="Nombre" component={renderField} type="text" style={{height:'30px',fontSize:'30px',fontFamily: 'sans-serif'}} />
          <Field name="lastname"  validate={required} label="Apellido" component={renderField} type="text" style={{height:'30px',fontSize:'30px',fontFamily: 'sans-serif'}} /> 
    
         
         <button type="submit"  disabled={!valid} className="w3-button w3-green w3-border w3-border-black w3-round-large" style={{width:'200px',height:'50px'}}>
          Crear bebe
          
          </button>
          
          </center>
          
        
      </div>
      
    </form>
  );
} 


const form = reduxForm({
  form: 'createBabyForm',
  onSubmit: function submit(values, dispatch) {
    console.log(values);
    let newBaby = actions.addBaby({name:values.name,lastname:values.lastname})
    dispatch(newBaby);
    dispatch(actions.selectBaby({id: newBaby.payload.id}));

    return dispatch(reset('createBabyForm'));
  },
  onSubmitSuccess:
  (result, dispatch, props) => { console.log("SUCCESS"); props.history.push('/events') }
})(createBabyForm);

export default withRouter(connect(
  state => ({
    numberBabies: selectors.getBabies(state).length,
  }),
)(form));
