import AboutController from './about.controller';

export const NAME: string = 'btAbout';
export const COMPONENT: ng.IComponentOptions = {
    controller: AboutController,
    templateUrl: '/app/about/about.template.html',   
}

export default {
    name: NAME,
    component: COMPONENT
}