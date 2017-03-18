define(["require", "exports", './../modal/modal.service', './../repositories.service'], function (require, exports, modal_service_1, repositories_service_1) {
    "use strict";
    var DICTIONARIES = ['category', 'product'];
    var HEADERS = [
        ["Title"],
        ["Category", "Title"]
    ];
    var FIELDS = [
        [function (c) { return c.Title; }],
        [function (p) { return p.Category.Title; }, function (p) { return p.Title; }]
    ];
    var EDIT = [
        null, function (p) {
            console.log('edit', p);
            return {
                url: '/app/product/product-form.modal.template.html',
                title: 'Edit Product',
                data: {
                    Additional: p.Category,
                    Model: p,
                    Type: 'edit'
                }
            };
        }
    ];
    var Dictionary;
    (function (Dictionary) {
        Dictionary[Dictionary["category"] = 0] = "category";
        Dictionary[Dictionary["product"] = 1] = "product";
    })(Dictionary || (Dictionary = {}));
    var DictionaryController = (function () {
        function DictionaryController($stateParams, $state, repositories, modals) {
            var _this = this;
            this.$stateParams = $stateParams;
            this.$state = $state;
            this.repositories = repositories;
            this.modals = modals;
            this.removing = [];
            if (!_(DICTIONARIES).find(function (d) { return d == $stateParams.type; })) {
                $state.go('main');
            }
            this.type = Dictionary[$stateParams.type];
            switch (this.type) {
                case Dictionary.category: {
                    var items = this.repositories.categoryRepo.query();
                    items.$promise.then(function (categories) {
                    });
                    break;
                }
                case Dictionary.product: {
                    var items = this.repositories.productRepo.query();
                    items.$promise.then(function (products) {
                        _this.items = products;
                    });
                    break;
                }
            }
        }
        DictionaryController.prototype.getField = function (number, f) {
            return FIELDS[this.type][number](f);
        };
        DictionaryController.prototype.edit = function (f) {
            console.log(f);
            var modalConfig = EDIT[this.type](f);
            this.modals.showModal(modalConfig);
        };
        DictionaryController.prototype.confirmRemove = function (f) {
            this.removing.push(f);
        };
        DictionaryController.prototype.cancelRemove = function (f) {
            _(this.removing).remove(function (i) { return i == f; }).commit();
        };
        DictionaryController.prototype.isRemoving = function (f) {
            return _(this.removing).find(f);
        };
        DictionaryController.prototype.remove = function (f) {
            var _this = this;
            switch (this.type) {
                case Dictionary.category: break;
                case Dictionary.product: {
                    this.repositories.productRepo.get({ id: f.ID }).$delete({ id: f.ID }).then(function () {
                        _(_this.items).remove(function (i) { return i.ID == f.ID; }).commit();
                    });
                    break;
                }
            }
        };
        DictionaryController.prototype.getHeaders = function () {
            return HEADERS[this.type];
        };
        DictionaryController.prototype.getItems = function () {
            return this.items;
        };
        return DictionaryController;
    }());
    exports.DictionaryController = DictionaryController;
    DictionaryController.$inject = ['$stateParams', '$state', repositories_service_1.NAME, modal_service_1.NAME];
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = DictionaryController;
});
//# sourceMappingURL=dictionary.controller.js.map