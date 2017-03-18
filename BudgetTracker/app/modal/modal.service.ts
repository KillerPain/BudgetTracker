import {ModalItemController, IModal} from './modal.item/modal.item.controller';

export const NAME: string = 'btModalService';

export class ModalService {
    constructor() { }

    public modals: IModal<any>[] = [];

    public showModal<T>(config: IModal<T>) {
        let modal = _(this.modals).find(m => m.url == config.url);
        if (!modal || modal.multiple) this.modals.push(config);
    }

    public closeModal<T>(config: IModal<T>) {
        _(this.modals).remove(m => m == config).commit();
    }
}

ModalService.$inject = [];

export default {
    name: NAME,
    service: ModalService
}