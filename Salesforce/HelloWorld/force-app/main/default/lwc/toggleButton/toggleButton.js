import { LightningElement } from 'lwc';

export default class ToggleButton extends LightningElement {
    toggleText= false;
     changeHandler(){
         this.toggleText= ! this.toggleText;
     }
}