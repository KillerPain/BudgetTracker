import AboutComponent from './about.component';

let mdl = angular.module('app.about', []);

mdl.component(AboutComponent.name, AboutComponent.component);

export default mdl.name;