define(["require", "exports", './line-graph.controller'], function (require, exports, line_graph_controller_1) {
    "use strict";
    exports.NAME = 'btLineGraph';
    exports.COMPONENT = {
        controller: line_graph_controller_1.default,
        template: '',
        bindings: {
            coords: '<',
            onClicked: '&',
            delimeters: '<',
            captions: '<'
        }
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        name: exports.NAME,
        component: exports.COMPONENT
    };
});
//# sourceMappingURL=line-graph.component.js.map