import {MenuController} from './menu/menu.controller';
export class AppController {
    constructor(private $cookies: ng.cookies.ICookiesService, private $state: ng.ui.IStateService) { }

    //public menuShown: boolean = false;

    public isAuthorized() {
        return this.$cookies.getObject('isAuthorized')
    }    

    public isActive(state: string, param?: string, value?: string): boolean {
        if (this.$state.is(state)) {
            if (!param) return true;
            if (param && this.$state.params[param] == value) return true;
        }
        return false;
    }

    public showMenu() {
        this.menu.isShown = true;
    }

    public menu: MenuController;

}

AppController.$inject = ['$cookies', '$state'];