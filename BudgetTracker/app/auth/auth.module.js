define(["require", "exports", './login/login.component', './registration/registration.component', './auth.service'], function (require, exports, login_component_1, registration_component_1, auth_service_1) {
    "use strict";
    var mdl = angular.module('app.auth', []);
    mdl.component(login_component_1.default.name, login_component_1.default.component);
    mdl.component(registration_component_1.default.name, registration_component_1.default.component);
    mdl.service(auth_service_1.default.name, auth_service_1.default.service);
    mdl.config(['$stateProvider', function ($stateProvider) {
            $stateProvider.state({
                name: 'user',
                abstract: true,
                url: '/user',
                template: 'user<ui-view></ui-view>'
            });
            $stateProvider.state({
                name: 'user.login',
                url: '/login',
                views: {
                    '@': {
                        template: '<login-form></login-form>'
                    }
                }
            });
            $stateProvider.state({
                name: 'user.register',
                url: '/register',
                views: {
                    '@': {
                        template: '<registration-form></registration-form>'
                    }
                }
            });
        }]);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = mdl.name;
});
//# sourceMappingURL=auth.module.js.map