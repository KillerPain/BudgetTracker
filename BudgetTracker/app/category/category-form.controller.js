define(["require", "exports", './../repositories.service'], function (require, exports, repositories_service_1) {
    "use strict";
    var CategoryFormController = (function () {
        function CategoryFormController(repos) {
            this.model = {};
            this.repo = repos.categoryRepo;
        }
        CategoryFormController.prototype.$onInit = function () {
        };
        CategoryFormController.prototype.create = function () {
            var category = new this.repo(this.model);
            category.$save();
        };
        CategoryFormController.prototype.update = function () {
            var _this = this;
            var category = this.repo.get({ ID: 1 });
            category.$promise.then(function (c) {
                category.Title = _this.model.Title;
                category.$update();
            });
        };
        return CategoryFormController;
    }());
    exports.CategoryFormController = CategoryFormController;
    CategoryFormController.$inject = [repositories_service_1.NAME];
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = CategoryFormController;
});
//# sourceMappingURL=category-form.controller.js.map