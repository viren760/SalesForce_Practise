import { LightningElement, track } from 'lwc';

export default class ComponentUsingTrack extends LightningElement {
    name="Virender Singh Negi";
    @track profile="Software Engineer";

    changeHandler(event){
           this.profile =event.target.value;
    }
}