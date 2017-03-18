define(["require", "exports", './transactions.component', './transaction-form/transaction-form.component'], function (require, exports, transactions_component_1, transaction_form_component_1) {
    "use strict";
    var mdl = angular.module('app.transactions', []);
    mdl.component(transactions_component_1.default.name, transactions_component_1.default.component);
    mdl.component(transaction_form_component_1.default.name, transaction_form_component_1.default.component);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = mdl.name;
});
//# sourceMappingURL=transactions.module.js.map