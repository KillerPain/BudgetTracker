import {TransactionFormController} from './transaction-form.controller';

export const NAME: string = 'btTransactionForm';

export const COMPONENT: ng.IComponentOptions = {
    controller: TransactionFormController,
    templateUrl: '/app/transactions/transaction-form/transaction-form.template.html',
    bindings: {
        type: '<',
        model: '<',
        date: '<'
    },
    require: {
        modal: '^^?btModalItem'
    }
}

export default {
    name: NAME,
    component: COMPONENT
}