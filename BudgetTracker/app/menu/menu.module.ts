import MenuComponent from './menu.component';

let mdl = angular.module('app.menu', []);

mdl.component(MenuComponent.name, MenuComponent.component);

export default mdl.name;