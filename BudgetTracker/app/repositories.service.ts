import {AuthService, NAME as AuthService_NAME} from "./auth/auth.service"

export class Repositories {
    constructor($resource: ng.resource.IResourceService, auth: AuthService) {
        let token = auth.getToken();

        this.categoryRepo = $resource("/api/categories/:id", { ID: '@ID' }, {
            get: <ng.resource.IActionDescriptor>{
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            },
            save: <ng.resource.IActionDescriptor>{
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            },
            query: <ng.resource.IActionDescriptor>{
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                isArray: true
            },
            update: <ng.resource.IActionDescriptor>{
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            },
            delete: <ng.resource.IActionDescriptor>{
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            },

        });
        this.productRepo = $resource("/api/products/:id", { ID: '@ID' }, {
            get: <ng.resource.IActionDescriptor>{
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            },
            save: <ng.resource.IActionDescriptor>{
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            },
            query: <ng.resource.IActionDescriptor>{
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                isArray: true
            },
            update: <ng.resource.IActionDescriptor>{
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            },
            delete: <ng.resource.IActionDescriptor>{
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            },
        });
        this.currencyRepo = $resource("/api/currencies/:id", { ID: '@ID' }, {
            get: <ng.resource.IActionDescriptor>{
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            },
            save: <ng.resource.IActionDescriptor>{
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            },
            query: <ng.resource.IActionDescriptor>{
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                isArray: true
            },
            update: <ng.resource.IActionDescriptor>{
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            },
            delete: <ng.resource.IActionDescriptor>{
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            },
        });
        this.transactionRepo = $resource("/api/transactions/:id", { ID: '@ID' }, {
            get: <ng.resource.IActionDescriptor>{
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            },
            save: <ng.resource.IActionDescriptor>{
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            },
            query: <ng.resource.IActionDescriptor>{
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                isArray: true
            },
            update: <ng.resource.IActionDescriptor>{
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            },
            delete: <ng.resource.IActionDescriptor>{
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            },
        });
    }
    public categoryRepo: ng.resource.IResourceClass<Models.ICategory & ng.resource.IResource<Models.ICategory>>;
    public productRepo:  ng.resource.IResourceClass<Models.IProduct  & ng.resource.IResource<Models.IProduct>>;
    public currencyRepo: ng.resource.IResourceClass<Models.ICurrency & ng.resource.IResource<Models.ICurrency>>;
    public transactionRepo: ng.resource.IResourceClass<Models.ITransaction & ng.resource.IResource<Models.ITransaction>>;

}

Repositories.$inject = ['$resource', AuthService_NAME];

export const NAME: string = "btRepositoriesService";

export default {
    name: NAME,
    service: Repositories
}