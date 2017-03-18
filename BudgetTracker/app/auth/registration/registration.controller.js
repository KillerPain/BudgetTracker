define(["require", "exports", './../auth.service'], function (require, exports, auth_service_1) {
    "use strict";
    var RegistrationController = (function () {
        function RegistrationController($auth) {
            this.$auth = $auth;
            this.model = {
                ConfirmPassword: '',
                Email: '',
                Password: ''
            };
        }
        RegistrationController.prototype.register = function () {
            this.$auth.register(this.model.Email, this.model.Password, this.model.ConfirmPassword);
        };
        return RegistrationController;
    }());
    exports.RegistrationController = RegistrationController;
    RegistrationController.$inject = [auth_service_1.NAME];
});
//# sourceMappingURL=registration.controller.js.map