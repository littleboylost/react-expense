import React from 'react';
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import {addExpense} from './actions/expenses'
import {setTexFilter} from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import  './styles/style.scss';
import 'normalize.css/normalize.css';

const store = configureStore();

console.log(visibleExpenses);

const App = () => {
  return(
    <Provider store={store}>
      <AppRouter />
    </Provider>
    
  )
}

export default App

