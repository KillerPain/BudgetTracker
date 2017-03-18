define(["require", "exports"], function (require, exports) {
    "use strict";
    var AppController = (function () {
        function AppController($cookies, $state) {
            this.$cookies = $cookies;
            this.$state = $state;
        }
        //public menuShown: boolean = false;
        AppController.prototype.isAuthorized = function () {
            return this.$cookies.getObject('isAuthorized');
        };
        AppController.prototype.isActive = function (state, param, value) {
            if (this.$state.is(state)) {
                if (!param)
                    return true;
                if (param && this.$state.params[param] == value)
                    return true;
            }
            return false;
        };
        AppController.prototype.showMenu = function () {
            this.menu.isShown = true;
        };
        return AppController;
    }());
    exports.AppController = AppController;
    AppController.$inject = ['$cookies', '$state'];
});
//# sourceMappingURL=app.controller.js.map