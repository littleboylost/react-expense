import {BrowserRouter, Route, Switch} from 'react-router-dom';
import React from 'react';
import Header from '../components/Header'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import HelpPage from '../components/HelpPage'
import EditExpensePage from '../components/EditExpensePage'
import AddExpensePage from '../components/AddExpensePage'
import NotFoundPage from '../components/NotFoundPage'



const AppRouter = () => {
   return( 
     <BrowserRouter>
        <div>
            <Header />
            <Switch>
            
            <Route  path='/' component={ExpenseDashboardPage} exact={true} />
            <Route  path='/create' component={AddExpensePage} />
            <Route exact  path={`/edit/`} component={EditExpensePage} />
            <Route  path={`/edit/:id`} component={EditExpensePage} />
            <Route  path='/help' component={HelpPage} />
            <Route component={NotFoundPage} />
                
          </Switch>
        </div>
    </BrowserRouter>
)}


export default AppRouter;