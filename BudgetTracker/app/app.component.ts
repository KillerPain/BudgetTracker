import {AppController} from './app.controller';

export const NAME: string = "app";

export const APP_COMPONENT: ng.IComponentOptions = {
    templateUrl: '/app/app.template.html',
    controller: AppController
}
export default {
    name: NAME,
    component: APP_COMPONENT
}