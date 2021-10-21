import { LightningElement } from 'lwc';

export default class ModalParentComponent extends LightningElement {
    showText=false;
    ShowModal(){
       this.showText=true; 
    }
    modalCloseHandler(){
        this.showText=false; 
    }
}