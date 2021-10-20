import { api, LightningElement } from 'lwc';

export default class ChildProgressBar extends LightningElement {
    @api percentage;

    get getValue(){
        return 'width:'+this.percentage+'%';
    }
}