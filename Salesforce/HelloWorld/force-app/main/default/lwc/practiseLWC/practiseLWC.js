import { LightningElement, track } from 'lwc';

export default class PractiseLWC extends LightningElement {
    @track greeting='Virender Singh negi';
    changeHandler(event){
      this.greeting = event.target.value;
    }
}