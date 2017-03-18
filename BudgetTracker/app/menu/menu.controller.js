define(["require", "exports", './../auth/auth.service'], function (require, exports, auth_service_1) {
    "use strict";
    var MenuController = (function () {
        function MenuController($state, $cookies, authService) {
            this.$state = $state;
            this.$cookies = $cookies;
            this.authService = authService;
            this.isShown = false;
            this.dictionariesShown = false;
        }
        MenuController.prototype.$onInit = function () {
            this.app.menu = this;
        };
        MenuController.prototype.close = function () {
            this.isShown = false;
        };
        MenuController.prototype.logout = function () {
            this.authService.logout();
            this.isShown = false;
        };
        MenuController.prototype.toggleDictionaries = function () {
            this.dictionariesShown = !this.dictionariesShown;
        };
        MenuController.prototype.go = function (state, params) {
            this.$state.go(state, params);
            this.close();
        };
        return MenuController;
    }());
    exports.MenuController = MenuController;
    MenuController.$inject = ['$state', '$cookies', auth_service_1.NAME];
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = MenuController;
});
//# sourceMappingURL=menu.controller.js.map