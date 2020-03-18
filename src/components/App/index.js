//Silvio Orozco
//Aplicaciones con router y browserrouter.
//Se aplica provider para que todos puedan acceder al store.

import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '../../store/store';
import Events from '../Events'
import FormCreateBaby from '../FormCreateBaby';
import { Route,BrowserRouter, Switch} from 'react-router-dom';



const store = configureStore();

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
     <Switch>
        <Route exact path='/'>
          <FormCreateBaby  />
        </Route>
        <Route path='/events'>
            <Events/>
        </Route>
      </Switch>
    </BrowserRouter>
  </Provider>
);


export default App;
