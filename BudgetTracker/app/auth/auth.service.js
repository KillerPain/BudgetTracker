define(["require", "exports"], function (require, exports) {
    "use strict";
    var IS_AUTHORIZED = 'isAuthorized';
    var INFO = 'info';
    exports.NAME = 'authService';
    var AuthService = (function () {
        function AuthService($cookies, $resource, $http, $httpParamSerializerJQLike, $q, $state) {
            this.$cookies = $cookies;
            this.$httpParamSerializerJQLike = $httpParamSerializerJQLike;
            this.$q = $q;
            this.$state = $state;
            this.isAuthorized = false;
            this.isAuthorized = $cookies.getObject(IS_AUTHORIZED) ? true : false;
            var postAction = {
                method: 'POST'
            };
            var loginAction = {
                method: 'POST',
                url: '/Token',
                transformRequest: this.$httpParamSerializerJQLike
            };
            this.accountRepo = $resource('/api/Account/:method', {}, {
                post: postAction,
                login: loginAction
            });
        }
        AuthService.prototype.checkAuthorization = function () {
            this.isAuthorized = this.$cookies.getObject(IS_AUTHORIZED) ? true : false;
            return this.isAuthorized;
        };
        AuthService.prototype.getToken = function () {
            var info = this.$cookies.getObject(INFO);
            return (info) ? info.token : null;
        };
        AuthService.prototype.login = function (userName, password) {
            var _this = this;
            var defer = this.$q.defer();
            this.accountRepo.login({ userName: userName, password: password, 'grant_type': 'password' }).$promise.then(function (r) {
                _this.$cookies.putObject(IS_AUTHORIZED, true, { expires: r.expires });
                _this.$cookies.putObject(INFO, {
                    token: r.access_token,
                    userName: r.userName
                }, { expires: r.expires });
                _this.isAuthorized = true;
                defer.resolve(true);
            }, function (reason) {
                defer.reject(reason);
            });
            return defer.promise;
        };
        AuthService.prototype.register = function (Email, Password, ConfirmPassword) {
            var result = this.accountRepo.post({ method: 'Register' }, {
                Email: Email,
                Password: Password,
                ConfirmPassword: ConfirmPassword
            }, function (r) {
                console.log(r);
            });
        };
        AuthService.prototype.logout = function () {
            this.isAuthorized = false;
            this.$cookies.remove('info');
            this.$cookies.remove('isAuthorized');
            if (this.$state.is('main')) {
                this.$state.reload();
            }
            else {
                this.$state.go('main');
            }
        };
        return AuthService;
    }());
    exports.AuthService = AuthService;
    AuthService.$inject = ['$cookies', '$resource', '$http', '$httpParamSerializerJQLike', '$q', '$state'];
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        name: exports.NAME,
        service: AuthService
    };
});
//# sourceMappingURL=auth.service.js.map