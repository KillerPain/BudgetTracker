namespace Models {
    export interface ICategory {
        ID?: number;
        Title?: string;
        User_ID?: number;

        Products?: IProduct[];
        UserInfo?: any;
    }
    export interface IProduct {       
        ID?: number;
        Title?: string;
        Category_ID?: number;

        Category?: ICategory;
        Transactions?: ITransaction[];
    } 
    export interface ICurrency {
        ID?: number;
        Title?: string;
        ShortTitle?: string;

        Transactions?: ITransaction[];
    }
    export interface ITransaction {
        ID?: number;
        Amount?: number;
        Product_ID?: number;
        Category_ID?: number;
        Currency_ID?: number;
        User_ID?: number;
        TransactionDate?: Date;

        Product?: IProduct;
        Category?: ICategory;
        Currency?: ICurrency;
    }

    export interface IModalData<T> {
        Model?: T;
        Type?: string;
        Additional?: any;
    }

}


namespace angular.resource {

    export interface IResourceClass<T> {
        update: IResourceMethod<T>;
    }

    export interface IResource<T> {
        
        $update(): angular.IPromise<T>;
        $update(params?: Object, success?: Function, error?: Function): angular.IPromise<T>;
        $update(success: Function, error?: Function): angular.IPromise<T>;
    }

    
}