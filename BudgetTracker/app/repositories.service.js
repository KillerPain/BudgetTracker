define(["require", "exports", "./auth/auth.service"], function (require, exports, auth_service_1) {
    "use strict";
    var Repositories = (function () {
        function Repositories($resource, auth) {
            var token = auth.getToken();
            this.categoryRepo = $resource("/api/categories/:id", { ID: '@ID' }, {
                get: {
                    method: 'GET',
                    headers: {
                        'Authorization': "Bearer " + token
                    }
                },
                save: {
                    method: 'POST',
                    headers: {
                        'Authorization': "Bearer " + token
                    }
                },
                query: {
                    method: 'GET',
                    headers: {
                        'Authorization': "Bearer " + token
                    },
                    isArray: true
                },
                update: {
                    method: 'PUT',
                    headers: {
                        'Authorization': "Bearer " + token
                    }
                },
                delete: {
                    method: 'DELETE',
                    headers: {
                        'Authorization': "Bearer " + token
                    }
                },
            });
            this.productRepo = $resource("/api/products/:id", { ID: '@ID' }, {
                get: {
                    method: 'GET',
                    headers: {
                        'Authorization': "Bearer " + token
                    }
                },
                save: {
                    method: 'POST',
                    headers: {
                        'Authorization': "Bearer " + token
                    }
                },
                query: {
                    method: 'GET',
                    headers: {
                        'Authorization': "Bearer " + token
                    },
                    isArray: true
                },
                update: {
                    method: 'PUT',
                    headers: {
                        'Authorization': "Bearer " + token
                    }
                },
                delete: {
                    method: 'DELETE',
                    headers: {
                        'Authorization': "Bearer " + token
                    }
                },
            });
            this.currencyRepo = $resource("/api/currencies/:id", { ID: '@ID' }, {
                get: {
                    method: 'GET',
                    headers: {
                        'Authorization': "Bearer " + token
                    }
                },
                save: {
                    method: 'POST',
                    headers: {
                        'Authorization': "Bearer " + token
                    }
                },
                query: {
                    method: 'GET',
                    headers: {
                        'Authorization': "Bearer " + token
                    },
                    isArray: true
                },
                update: {
                    method: 'PUT',
                    headers: {
                        'Authorization': "Bearer " + token
                    }
                },
                delete: {
                    method: 'DELETE',
                    headers: {
                        'Authorization': "Bearer " + token
                    }
                },
            });
            this.transactionRepo = $resource("/api/transactions/:id", { ID: '@ID' }, {
                get: {
                    method: 'GET',
                    headers: {
                        'Authorization': "Bearer " + token
                    }
                },
                save: {
                    method: 'POST',
                    headers: {
                        'Authorization': "Bearer " + token
                    }
                },
                query: {
                    method: 'GET',
                    headers: {
                        'Authorization': "Bearer " + token
                    },
                    isArray: true
                },
                update: {
                    method: 'PUT',
                    headers: {
                        'Authorization': "Bearer " + token
                    }
                },
                delete: {
                    method: 'DELETE',
                    headers: {
                        'Authorization': "Bearer " + token
                    }
                },
            });
        }
        return Repositories;
    }());
    exports.Repositories = Repositories;
    Repositories.$inject = ['$resource', auth_service_1.NAME];
    exports.NAME = "btRepositoriesService";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        name: exports.NAME,
        service: Repositories
    };
});
//# sourceMappingURL=repositories.service.js.map