import {TransactionsController} from './transaction.controller';

export const NAME: string = 'btTransactions';
export const COMPONENT: ng.IComponentOptions = {
    controller: TransactionsController,
    templateUrl: '/app/transactions/transactions.template.html',
}

export default {
    name: NAME,
    component: COMPONENT
}
