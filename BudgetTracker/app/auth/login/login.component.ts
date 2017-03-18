import {LoginController} from './login.controller';
export const NAME: string = 'loginForm';

export const LOGIN_COMPONENT: ng.IComponentOptions = {
    templateUrl: '/app/auth/login/login.template.html',
    controller: LoginController
}
export default {
    name: NAME,
    component: LOGIN_COMPONENT
}