const IS_AUTHORIZED = 'isAuthorized'
const INFO = 'info';

export const NAME: string = 'authService';

interface IAccountRepository extends ng.resource.IResourceClass<any> {
    post: ng.resource.IResourceMethod<ng.resource.IResource<any>>;
    login: ng.resource.IResourceMethod<ng.resource.IResource<any>>;
}

export class AuthService {
    constructor(
        private $cookies: ng.cookies.ICookiesService,
        $resource: any,
        $http: ng.IHttpService,
        private $httpParamSerializerJQLike: ng.IHttpParamSerializer,
        private $q: ng.IQService,
        private $state: ng.ui.IStateService
    ) {
        this.isAuthorized = $cookies.getObject(IS_AUTHORIZED) ? true : false;
        let postAction: ng.resource.IActionDescriptor = {
            method: 'POST'
        }
        let loginAction: ng.resource.IActionDescriptor = {
            method: 'POST',
            url: '/Token',
            transformRequest: this.$httpParamSerializerJQLike
        }
        this.accountRepo = $resource('/api/Account/:method', {}, {
            post: postAction,
            login: loginAction
        });
    }
    public isAuthorized: boolean = false;
    public accountRepo: IAccountRepository;

    public checkAuthorization() {
        this.isAuthorized = this.$cookies.getObject(IS_AUTHORIZED) ? true : false;
        return this.isAuthorized;
    }

    public getToken() {
        let info = this.$cookies.getObject(INFO);
        return (info)? info.token : null;
    }

    public login(userName: string, password: string): ng.IPromise<boolean> {
        let defer = this.$q.defer<boolean>();

        this.accountRepo.login({ userName: userName, password: password, 'grant_type': 'password' }).$promise.then((r) => {
            this.$cookies.putObject(IS_AUTHORIZED, true, { expires: r.expires });
            this.$cookies.putObject(INFO, {
                token: r.access_token,
                userName: r.userName
            }, { expires: r.expires });
            this.isAuthorized = true;
            defer.resolve(true);
        }, reason => {
            defer.reject(reason);
        });

        return defer.promise;
    }

    public register(Email: string, Password: string, ConfirmPassword: string) {
        let result = this.accountRepo.post({ method: 'Register' }, {
            Email: Email,
            Password: Password,
            ConfirmPassword: ConfirmPassword
        }, (r) => {
            console.log(r);
        });
    }

    public logout() {
        this.isAuthorized = false;
        this.$cookies.remove('info');
        this.$cookies.remove('isAuthorized');
        if (this.$state.is('main')) {
            this.$state.reload();
        } else {
            this.$state.go('main');
        }
        
    }

}
AuthService.$inject = ['$cookies', '$resource', '$http', '$httpParamSerializerJQLike', '$q', '$state']; 
export default {
    name: NAME,
    service: AuthService
}