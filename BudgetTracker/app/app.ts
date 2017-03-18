import AppComponent from './app.component';
import AuthModule from './auth/auth.module';
import TransactionsModule from './transactions/transactions.module';
import ModalModule from './modal/modal.module';
import InputsModule from './inputs/inputs.module';
import CategoryModule from './category/category.module';
import ProductModule from './product/product.module';
import CurrencyModule from './currency/currencies.module';
import MenuModule from './menu/menu.module';
import RepositoriesService from './repositories.service';
import DictionaryModule from './dictionary/dictionary.module';
import AboutModule from './about/about.module';
import DonutChart from './donut-chart/donut-chart.module';
import LineGraph from './line-graph/line-graph.module';

import {AuthService} from './auth/auth.service';

let mdl = angular.module('app', [
    'ngResource',
    'ngCookies',
    'ui.router',
    AuthModule,
    TransactionsModule,
    ModalModule,
    InputsModule,
    CategoryModule,
    ProductModule,
    CurrencyModule,
    MenuModule,
    DictionaryModule,
    AboutModule,
    DonutChart,
    LineGraph
]);

mdl.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', (
    $stateProvider: ng.ui.IStateProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider,
    $locationProvider: ng.ILocationProvider
) => {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false,
        rewriteLinks: true
    });

    $urlRouterProvider.otherwise(() => {
        console.log('wrong state');
    });

    $stateProvider.state({
        name: 'main',
        url: '/',
        cache: false,
        params: {
            type: 'today'
        },
        templateProvider: ['authService', ($auth: AuthService) => {
            console.log('here', $auth);
            if ($auth.isAuthorized) {
                return '<bt-transactions></bt-transactions>';
            } else {
                return '<bt-about></bt-about>'
            }
        }],
        onEnter: () => {
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
    })

    

}]);

mdl.service(RepositoriesService.name, RepositoriesService.service);

mdl.component(AppComponent.name, AppComponent.component);

