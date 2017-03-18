import {RegistrationController} from './registration.controller';
export const NAME: string = 'registrationForm';

export const LOGIN_COMPONENT: ng.IComponentOptions = {
    templateUrl: '/app/auth/registration/registration.template.html',
    controller: RegistrationController
}
export default {
    name: NAME,
    component: LOGIN_COMPONENT
}