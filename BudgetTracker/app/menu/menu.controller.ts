import {AppController} from './../app.controller';
import {AuthService, NAME as AuthService_NAME} from './../auth/auth.service';

export class MenuController {
    public constructor(private $state: ng.ui.IStateService, private $cookies: ng.cookies.ICookiesService, private authService: AuthService) { }

    public app: AppController;    

    public isShown: boolean = false;

    public $onInit() {
        this.app.menu = this;
    }

    public close() {
        this.isShown = false;
    }

    public logout() {
        this.authService.logout();
        this.isShown = false;
    }

    public dictionariesShown: boolean = false;

    public toggleDictionaries() {
        this.dictionariesShown = !this.dictionariesShown;
    }

    public go(state: string, params: any) {
        this.$state.go(state, params);
        this.close();
    }

}
MenuController.$inject = ['$state', '$cookies', AuthService_NAME]
export default MenuController;