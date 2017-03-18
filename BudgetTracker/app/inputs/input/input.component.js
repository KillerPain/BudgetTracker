define(["require", "exports", './input.controller'], function (require, exports, input_controller_1) {
    "use strict";
    exports.NAME = 'btInput';
    exports.COMPONENT = {
        controller: input_controller_1.default,
        templateUrl: '/app/inputs/input/input.template.html',
        bindings: {
            hasButton: '<',
            buttonClick: '&',
            buttonIcon: '<',
            choosed: '&',
            items: '<',
            label: '<',
            ngModel: '=',
            modelField: '<',
            labelField: '<',
            type: '<'
        }
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        name: exports.NAME,
        component: exports.COMPONENT
    };
});
//# sourceMappingURL=input.component.js.map