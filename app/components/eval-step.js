import {customElement, bindable, inject} from 'aurelia-framework';

@customElement('eval-step')
@inject(Element)
@bindable({name: 'stepNum'})
export class EvalStep {
    constructor(element) {
        this.element = element;
    }
}