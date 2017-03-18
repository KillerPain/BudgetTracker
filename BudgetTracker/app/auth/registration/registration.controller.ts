import {AuthService, NAME as AuthService_NAME} from './../auth.service';
export class RegistrationController {
    constructor(private $auth: AuthService) {

    }

    public model: {
        Email: string;
        Password: string;
        ConfirmPassword: string;
    } = {
        ConfirmPassword: '',
        Email: '',
        Password: ''
    }

    public register() {
        this.$auth.register(this.model.Email, this.model.Password, this.model.ConfirmPassword);
    }
}
RegistrationController.$inject = [AuthService_NAME];