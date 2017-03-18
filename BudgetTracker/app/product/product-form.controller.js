define(["require", "exports", './../repositories.service'], function (require, exports, repositories_service_1) {
    "use strict";
    var ProductFormController = (function () {
        function ProductFormController(repos) {
            this.repo = repos.productRepo;
            this.categoryRepo = repos.categoryRepo;
        }
        ProductFormController.prototype.$onInit = function () {
            var _this = this;
            this.model = this.model || {};
            this.categoryRepo.query().$promise.then(function (categories) {
                _this.categories = categories;
                if (_this.category) {
                    _this.model.Category = _(categories).find(function (c) { return c.ID == _this.category.ID; });
                }
            });
        };
        ProductFormController.prototype.create = function () {
            var _this = this;
            if (this.model.Category) {
                this.model.Category_ID = this.model.Category.ID;
            }
            this.model.Category = undefined;
            this.model.Transactions = undefined;
            var product = new this.repo(this.model);
            product.$save().then(function () {
                _this.modal.close();
            });
        };
        ProductFormController.prototype.update = function () {
            var _this = this;
            var product = this.repo.get({ ID: this.model.ID });
            product.$promise.then(function (c) {
                product.Category = undefined;
                product.Transactions = undefined;
                product.Title = _this.model.Title;
                product.Category_ID = _this.model.Category.ID;
                product.$update().then(function () {
                    _this.modal.close();
                });
            });
        };
        return ProductFormController;
    }());
    exports.ProductFormController = ProductFormController;
    ProductFormController.$inject = [repositories_service_1.NAME];
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = ProductFormController;
});
//# sourceMappingURL=product-form.controller.js.map