import {Router} from 'aurelia-router';
import {customElement, bindable, inject} from 'aurelia-framework';
import $ from 'jquery';

@customElement('wave-canvas')
@inject(Element, Router)
@bindable({name:'hasGenerate', defaultValue:true})
export class WaveCanvas {
    constructor(element, router) {
        this.router = router;
        this.element = element;

    }
    
    goHome() {
        this.router.navigate('welcome');
    }

    attached() {
        let initialEvent = new CustomEvent('init', {
            bubbles: true
        });
        this.element.dispatchEvent(initialEvent);
        $(".moreLink").on('click', () => {
            $(".hiddenDetails").toggleClass('hidden');
        })
    }
}