import React from 'react'
import ConnectedExpensesList from './ExpensesList'
import ExpenseListFilters from './ExpenseListFilters'
const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilters />
        <ConnectedExpensesList />
        
    </div>
)

export default ExpenseDashboardPage;