import {customElement, bindable, inject} from 'aurelia-framework';

@customElement('eval-input')
@inject(Element)
@bindable({name: 'label'})
@bindable({name: 'variable'})
export class EvalStep {
    constructor(element) {
        this.element = element;
    }
}