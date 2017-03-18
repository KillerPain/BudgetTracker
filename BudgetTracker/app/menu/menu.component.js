define(["require", "exports", './menu.controller', '../app.component'], function (require, exports, menu_controller_1, app_component_1) {
    "use strict";
    exports.NAME = "btMenu";
    exports.MenuComponent = {
        controller: menu_controller_1.default,
        templateUrl: '/app/menu/menu.template.html',
        require: {
            app: "^^" + app_component_1.NAME,
        }
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        name: exports.NAME,
        component: exports.MenuComponent
    };
});
//# sourceMappingURL=menu.component.js.map