define(["require", "exports", './../../modal/modal.service', './../../repositories.service'], function (require, exports, modal_service_1, repositories_service_1) {
    "use strict";
    var TransactionFormController = (function () {
        function TransactionFormController(modalService, repos, $scope) {
            this.modalService = modalService;
            this.repos = repos;
            this.$scope = $scope;
            this.currencies = [];
            this.categories = [];
            this.products = [];
            this.repo = repos.transactionRepo;
        }
        TransactionFormController.prototype.$onInit = function () {
            var _this = this;
            console.log(this.date);
            this.categories = this.repos.categoryRepo.query();
            this.categories.$promise.then(function (c) {
                if (c[0])
                    _this.model.Category = c[0];
            });
            this.products = [];
            this.currencies = this.repos.currencyRepo.query();
            this.currencies.$promise.then(function (c) {
                if (c[0])
                    _this.model.Currency = c[0].ID;
            });
            this.model = this.model || {
                Amount: 0,
                Category: null,
                ID: undefined,
                ProductID: null,
                Currency: null,
                TransactionDate: this.date.toDate()
            };
            this.categoryWatcher = this.$scope.$watch('$ctrl.model.Category', function (newValue, oldValue) {
                if (newValue) {
                    if (newValue.Products[0])
                        _this.model.ProductID = newValue.Products[0].ID;
                }
            });
        };
        TransactionFormController.prototype.getProducts = function (categoryId) {
            var category = _(this.categories).find(function (c) { return c.ID == categoryId; });
            if (category) {
                return category.Products;
            }
            else {
                return this.products;
            }
        };
        TransactionFormController.prototype.addCategory = function () {
            this.modalService.showModal({
                url: '/app/category/category.form.modal.template.html',
                title: 'New Category',
                closeOnOverlayClick: true
            });
        };
        TransactionFormController.prototype.addProduct = function (category) {
            this.modalService.showModal({
                url: '/app/product/product-form.modal.template.html',
                title: 'New Product',
                data: {
                    Additional: category
                }
            });
        };
        TransactionFormController.prototype.createTransaction = function () {
            var _this = this;
            console.log(this.model);
            var transactionModel = {
                ID: this.model.ID,
                Amount: this.model.Amount,
                Currency_ID: this.model.Currency.ID,
                Product_ID: this.model.ProductID,
                User_ID: null,
                TransactionDate: this.model.TransactionDate
            };
            var transaction = new this.repo(transactionModel);
            console.log(transaction);
            transaction.$save().then(function (transaction) {
                _this.modal.close();
            });
        };
        TransactionFormController.prototype.cancel = function () {
            this.modal.close();
        };
        return TransactionFormController;
    }());
    exports.TransactionFormController = TransactionFormController;
    TransactionFormController.$inject = [modal_service_1.NAME, repositories_service_1.NAME, '$scope'];
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = TransactionFormController;
});
//# sourceMappingURL=transaction-form.controller.js.map