import { LightningElement } from 'lwc';

export default class Directives extends LightningElement {
    boolean= false;
    changeHandler(event){
     this.boolean= true;
    }

    deleteHandler(event){
        this.boolean= false;    
    }
}