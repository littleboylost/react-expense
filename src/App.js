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
store.dispatch(addExpense({description: 'Water bill' , amount:4500}))
store.dispatch(addExpense({description: 'Gas bill', createdAt: 1000}))
store.dispatch(addExpense({description: 'Rent' , amount:10905}))

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses,state.filters)

console.log(visibleExpenses);

const App = () => {
  return(
    <Provider store={store}>
      <AppRouter />
    </Provider>
    
  )
}

export default App

