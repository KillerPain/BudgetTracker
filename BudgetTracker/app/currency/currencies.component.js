define(["require", "exports", './currencies.controller'], function (require, exports, currencies_controller_1) {
    "use strict";
    exports.NAME = 'btCurrencies';
    exports.COMPONENT = {
        controller: currencies_controller_1.CurrenciesController,
        templateUrl: '/app/currency/currencies.template.html'
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        name: exports.NAME,
        component: exports.COMPONENT
    };
});
//# sourceMappingURL=currencies.component.js.map