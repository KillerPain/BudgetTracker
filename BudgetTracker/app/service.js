define(["require", "exports"], function (require, exports) {
    "use strict";
    var Service = (function () {
        function Service($resource) {
            this.$resource = $resource;
            var token = 'zP0J4Jdbmh42NR0rZWLEDc8KR4dZd4uC9Bz_pB0ZdY0LaC-oILrdE4zy2u2B71MuEi0itr9iP0lJRCbV7RzrdY5pvKD0LMKj3Xp6SP9qWi6I5yBpjEUu5QGdzTpAewLX0K0EAeEmCsPRexB5YEMyJxNT160NrI6okanLS3XOIELEBok19tySTmzOjlz5JcKGYoKt3zXyC_-eF-9GrcYyDENL4nEvbxcPplhjfeMeUiGJXnjdgncW6zBtw2c1KjwfxKJhHsV5LgDwoFAuZlDThkmwHj-zGxYdHZ5URqGLypvNsfHw-ffY9xfZInBZhngcI4VoNRHKaCGM7FbXuXVA8uAhlwanV5eQiPPEuGZs6_2z0gN0n58uZKBefuKro-KEgCbb7-umLMLGfwHuJS6nVW68BmRIDyiL_tzzpEFjcnV7flSLhACr9KTavEQdlE7f3iECm2rDK31KFe0ZWNaynBNJErrv4LcADr7QCZM09CL1qhVzchKCGnvHRFITN2Zu';
        }
        Service.prototype.add = function (model) {
            var newmodel = new this.repo({ Title: model });
            newmodel.$save();
        };
        Service.prototype.get = function (params) {
            if (params != null) {
                return this.repo.get(params);
            }
            else
                return this.repo.query();
        };
        return Service;
    }());
    Service.$inject = ['$resource'];
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Service;
});
//# sourceMappingURL=service.js.map