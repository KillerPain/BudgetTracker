import {AuthService, NAME as AuthService_NAME} from './../auth.service';
export class LoginController {
    constructor(private $auth: AuthService, private $state: ng.ui.IStateService) {

    }

    public model: {
        Email: string;
        Password: string;
    } = {
        Email: '',
        Password: ''
    }

    public login() {
        this.$auth.login(this.model.Email, this.model.Password).then(r => {
            if (r) {
                this.$state.go('main');
            }
        }, reason => {
            console.error(reason);
        });
    }

}
LoginController.$inject = [AuthService_NAME, '$state'];