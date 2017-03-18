define(["require", "exports", './registration.controller'], function (require, exports, registration_controller_1) {
    "use strict";
    exports.NAME = 'registrationForm';
    exports.LOGIN_COMPONENT = {
        templateUrl: '/app/auth/registration/registration.template.html',
        controller: registration_controller_1.RegistrationController
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        name: exports.NAME,
        component: exports.LOGIN_COMPONENT
    };
});
//# sourceMappingURL=registration.component.js.map