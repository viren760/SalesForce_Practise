import { LightningElement } from 'lwc';

export default class EventRendering extends LightningElement {
    inputText= null;

    get text(){
        return this.inputText =='Viren';
    }

    eventHandler(event){
        this.inputText= event.target.value;
    }
}