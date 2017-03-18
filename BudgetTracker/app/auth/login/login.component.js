define(["require", "exports", './login.controller'], function (require, exports, login_controller_1) {
    "use strict";
    exports.NAME = 'loginForm';
    exports.LOGIN_COMPONENT = {
        templateUrl: '/app/auth/login/login.template.html',
        controller: login_controller_1.LoginController
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        name: exports.NAME,
        component: exports.LOGIN_COMPONENT
    };
});
//# sourceMappingURL=login.component.js.map