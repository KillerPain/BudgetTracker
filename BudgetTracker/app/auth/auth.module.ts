import LoginFormComponent from './login/login.component';
import RegisterFormComponent from './registration/registration.component';
import AuthService from './auth.service';

let mdl = angular.module('app.auth', []);

mdl.component(LoginFormComponent.name, LoginFormComponent.component);
mdl.component(RegisterFormComponent.name, RegisterFormComponent.component);
mdl.service(AuthService.name, AuthService.service);

mdl.config(['$stateProvider', ($stateProvider: ng.ui.IStateProvider) => {
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

export default mdl.name;