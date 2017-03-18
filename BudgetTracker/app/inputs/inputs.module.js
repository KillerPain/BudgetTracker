define(["require", "exports", './select/select.component', './input/input.component'], function (require, exports, select_component_1, input_component_1) {
    "use strict";
    var mdl = angular.module('app.inputs', []);
    mdl.component(select_component_1.default.name, select_component_1.default.component);
    mdl.component(input_component_1.default.name, input_component_1.default.component);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = mdl.name;
});
//# sourceMappingURL=inputs.module.js.map