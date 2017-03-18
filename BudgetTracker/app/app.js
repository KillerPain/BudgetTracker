define(["require", "exports", './app.component', './auth/auth.module', './transactions/transactions.module', './modal/modal.module', './inputs/inputs.module', './category/category.module', './product/product.module', './currency/currencies.module', './menu/menu.module', './repositories.service', './dictionary/dictionary.module', './about/about.module', './donut-chart/donut-chart.module', './line-graph/line-graph.module'], function (require, exports, app_component_1, auth_module_1, transactions_module_1, modal_module_1, inputs_module_1, category_module_1, product_module_1, currencies_module_1, menu_module_1, repositories_service_1, dictionary_module_1, about_module_1, donut_chart_module_1, line_graph_module_1) {
    "use strict";
    var mdl = angular.module('app', [
        'ngResource',
        'ngCookies',
        'ui.router',
        auth_module_1.default,
        transactions_module_1.default,
        modal_module_1.default,
        inputs_module_1.default,
        category_module_1.default,
        product_module_1.default,
        currencies_module_1.default,
        menu_module_1.default,
        dictionary_module_1.default,
        about_module_1.default,
        donut_chart_module_1.default,
        line_graph_module_1.default
    ]);
    mdl.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false,
                rewriteLinks: true
            });
            $urlRouterProvider.otherwise(function () {
                console.log('wrong state');
            });
            $stateProvider.state({
                name: 'main',
                url: '/',
                cache: false,
                params: {
                    type: 'today'
                },
                templateProvider: ['authService', function ($auth) {
                        console.log('here', $auth);
                        if ($auth.isAuthorized) {
                            return '<bt-transactions></bt-transactions>';
                        }
                        else {
                            return '<bt-about></bt-about>';
                        }
                    }],
                onEnter: function () {
                    console.log('onEnter');
                }
            });
            $stateProvider.state({
                name: 'main.param',
                url: 'transactions/:type',
                params: {
                    type: 'today'
                }
            });
            $stateProvider.state({
                name: 'dictionaries',
                url: '/dictionaries/:type',
                template: '<bt-dictionary></bt-dictionary>'
            });
        }]);
    mdl.service(repositories_service_1.default.name, repositories_service_1.default.service);
    mdl.component(app_component_1.default.name, app_component_1.default.component);
});
//# sourceMappingURL=app.js.map