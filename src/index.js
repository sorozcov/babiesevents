//Silvio Orozco
//Render de app en root html
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';


ReactDOM.render(
   <App />,
   document.getElementById('root'),
);





//Pruebas de Estado y Reducer
// import * as actions from '../src/actions/babies';
// import * as actionsEvents from '../src/actions/events';
// import * as selectors from '../src/reducers/index'
//import { configureStore } from './store/store';
//let store = configureStore();
// console.log(store.dispatch(actions.addBaby({id:2,name:"Bebe",lastname:"Bebe"})))
// console.log(store.dispatch(actions.addBaby({id:1,name:"Silvio",lastname:"Orozco"})))
// console.log(store.getState());
// console.log(store.dispatch(actions.selectBaby({id:2})))
// console.log(store.dispatch(actions.addBaby({id:4,name:"Anthony",lastname:"Ruiz"})))
// console.log(store.getState());
// console.log(store.dispatch(actionsEvents.addEvent({id:1000,type:1,notes:"Mi nota",date:"11/03/2020",babyId:2})))
// console.log(store.getState());
// console.log(store.dispatch(actionsEvents.addEvent({id:1001,type:2,notes:"Mi nota 2",date:"12/03/2020",babyId:2})))
// console.log(store.getState());
// console.log(store.dispatch(actionsEvents.addEvent({id:1002,type:1,notes:"Mi nota 3",date:"14/03/2020",babyId:4})))

//let state = store.getState();
// console.log(store.dispatch(actionsEvents.deleteEvent({id:1000,babyId:2})))
// console.log(selectors.getBaby(state,2))
// console.log(selectors.getEventsByBaby(state,2))
// console.log(selectors.getEvent(state,1000))
//console.log(selectors.getEventsByBabySelected(state))
// console.log(selectors.getBabies(state))
//Todas funcionaron


