import {Router} from 'aurelia-router';
import {customElement, bindable, inject} from 'aurelia-framework';

@customElement('wave-canvas')
@inject(Router)
export class WaveCanvas {
    constructor(router) {
        this.router = router;
    }
    
    goHome() {
        this.router.navigate('welcome');
    }
}