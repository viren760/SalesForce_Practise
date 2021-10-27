import { api, LightningElement } from 'lwc';

export default class NavChildComponent extends LightningElement {
    @api playerList;
    changeSelection(event){
        console.log('heyy');
            const selectEvent = new CustomEvent('selection',{
              detail:event.target.name
            })
            this.dispatchEvent(selectEvent);
    }
}