import MenuController from './menu.controller';
import {NAME as AppComponent} from '../app.component';

export const NAME: string = "btMenu";

export const MenuComponent: ng.IComponentOptions = {
    controller: MenuController,
    templateUrl: '/app/menu/menu.template.html',
    require: {
        app: `^^${AppComponent}`,
    }
}

export default {
    name: NAME,
    component: MenuComponent
}