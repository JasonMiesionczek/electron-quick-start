import {Router} from 'aurelia-router';
import {customElement, bindable, inject} from 'aurelia-framework';

@customElement('lambdoma-grid')
@bindable('headers')
@bindable('data')
@bindable('hlabel')
@bindable('vlabel')
@bindable('caption')
@inject(Router)
export class LambDomaGrid {
    constructor(router) {
        this.router = router;
        //this.headers = [];
        //this.data = [];
    }
    
    goHome() {
        this.router.navigate('welcome');
    }
}