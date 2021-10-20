import { api, LightningElement } from 'lwc';

export default class BarChildComponent extends LightningElement {
    colour="slds-button slds-button_success";
    @api changeBarColor(){
        console.log('reddddd');
     return this.colour = "slds-button slds-button_destructive";
    }
}