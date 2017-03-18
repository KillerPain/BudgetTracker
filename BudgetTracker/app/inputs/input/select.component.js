define(["require", "exports", './select.controller'], function (require, exports, select_controller_1) {
    "use strict";
    exports.NAME = 'btSelect';
    exports.COMPONENT = {
        controller: select_controller_1.default,
        templateUrl: '/app/inputs/select/select.template.html',
        bindings: {
            hasButton: '<',
            buttonClick: '&',
            buttonIcon: '<',
            choosed: '&',
            items: '<',
            label: '<',
            ngModel: '=',
            modelField: '<',
            labelField: '<'
        }
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        name: exports.NAME,
        component: exports.COMPONENT
    };
});
//# sourceMappingURL=select.component.js.map