import {customElement, bindable, inject} from 'aurelia-framework';

@customElement('eval-stats')
@inject(Element)
export class EvalStats {
    constructor(element) {
        this.element = element;
    }
}