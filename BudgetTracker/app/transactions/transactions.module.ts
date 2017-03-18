import TransactionsComponent from './transactions.component';
import TransactionForm from './transaction-form/transaction-form.component';

let mdl = angular.module('app.transactions', []);

mdl.component(TransactionsComponent.name, TransactionsComponent.component);
mdl.component(TransactionForm.name, TransactionForm.component);

export default mdl.name;