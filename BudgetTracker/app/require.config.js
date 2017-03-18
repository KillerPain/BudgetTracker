require.config({
    paths: {
        'angular': '/Scripts/angular.min',
        'angular-resource': '/Scripts/angular-resource.min',
        'angular-cookies': '/Scripts/angular-cookies',
        'angular-ui-router': '/Scripts/angular-ui-router.min',
        'jquery': '/Scripts/jquery-2.2.4.min',
        'lodash': '/Scripts/lodash.min',
        'moment': '/Scripts/moment-with-locales',
        'app': '/app/app',
    },
    shim: {
        'moment': {
            deps: ['jquery']
        },
        'lodash': {
            deps: ['jquery']
        },
        'angular': {
            deps: ['lodash']
        },
        'angular-resource': {
            deps: ['angular']
        },
        'angular-cookies': {
            deps: ['angular']
        },
        'angular-ui-router': {
            deps: ['angular']
        },
        'app': {
            deps: ['angular-resource', 'angular-cookies', 'angular-ui-router']
        }
    }
});
require(['app'], function () {
    angular.bootstrap(document, ['app']);
});
//# sourceMappingURL=require.config.js.map