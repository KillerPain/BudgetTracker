define(["require", "exports"], function (require, exports) {
    "use strict";
    var CurrenciesController = (function () {
        function CurrenciesController($http) {
            this.$http = $http;
            this.currencies = [];
        }
        CurrenciesController.prototype.$onInit = function () {
            var _this = this;
            this.$http.get('/api/GetCurrencies').then(function (r) {
                var data = (r.data);
                _this.currencies = [];
                data.forEach(function (item) {
                    if (item.Title == "RUB" || item.Title == "EUR" || item.Title == "USD" || item.Title == "GBP") {
                        _this.currencies.push({
                            Amount: +item.Description,
                            Change: item.Change,
                            Currency: item.Title.toLowerCase(),
                            TrendClass: (item.Index.toLowerCase() == '') ? "flat" : item.Index.toLowerCase(),
                            TrendIcon: (item.Index.toLowerCase() == '') ? "" : "trending_" + item.Index.toLowerCase()
                        });
                    }
                });
            });
        };
        CurrenciesController.prototype.getCurrencies = function () {
            return this.currencies;
        };
        return CurrenciesController;
    }());
    exports.CurrenciesController = CurrenciesController;
    CurrenciesController.$inject = ['$http'];
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = CurrenciesController;
});
//# sourceMappingURL=currencies.controller.js.map