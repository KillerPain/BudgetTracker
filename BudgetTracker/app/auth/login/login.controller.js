define(["require", "exports", './../auth.service'], function (require, exports, auth_service_1) {
    "use strict";
    var LoginController = (function () {
        function LoginController($auth, $state) {
            this.$auth = $auth;
            this.$state = $state;
            this.model = {
                Email: '',
                Password: ''
            };
        }
        LoginController.prototype.login = function () {
            var _this = this;
            this.$auth.login(this.model.Email, this.model.Password).then(function (r) {
                if (r) {
                    _this.$state.go('main');
                }
            }, function (reason) {
                console.error(reason);
            });
        };
        return LoginController;
    }());
    exports.LoginController = LoginController;
    LoginController.$inject = [auth_service_1.NAME, '$state'];
});
//# sourceMappingURL=login.controller.js.map