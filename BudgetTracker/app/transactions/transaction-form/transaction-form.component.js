define(["require", "exports", './transaction-form.controller'], function (require, exports, transaction_form_controller_1) {
    "use strict";
    exports.NAME = 'btTransactionForm';
    exports.COMPONENT = {
        controller: transaction_form_controller_1.TransactionFormController,
        templateUrl: '/app/transactions/transaction-form/transaction-form.template.html',
        bindings: {
            type: '<',
            model: '<',
            date: '<'
        },
        require: {
            modal: '^^?btModalItem'
        }
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        name: exports.NAME,
        component: exports.COMPONENT
    };
});
//# sourceMappingURL=transaction-form.component.js.map