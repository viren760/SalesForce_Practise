import { LightningElement, track } from 'lwc';

export default class SimpleInterestPrinciple extends LightningElement {
    @track currentOutput;
    principal;
    rate;
    time;


    principleChangeHandler(event){
           this.principal = parseInt (event.target.value);
    }
 
    rateChangeHandler(event){
        this.rate= parseInt (event.target.value);
    }
     
    timeChangeHandler(event){
        this.time= parseInt (event.target.value);
    }

    calculatehandler(){
        this.currentOutput= 'Simple Interest is :'+(this.principal*this.rate*this.time)/100;
    }
}