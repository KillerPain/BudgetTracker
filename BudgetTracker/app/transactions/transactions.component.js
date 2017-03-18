define(["require", "exports", './transaction.controller'], function (require, exports, transaction_controller_1) {
    "use strict";
    exports.NAME = 'btTransactions';
    exports.COMPONENT = {
        controller: transaction_controller_1.TransactionsController,
        templateUrl: '/app/transactions/transactions.template.html',
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        name: exports.NAME,
        component: exports.COMPONENT
    };
});
//# sourceMappingURL=transactions.component.js.map