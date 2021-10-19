import { LightningElement } from 'lwc';

export default class GetterDemo extends LightningElement {
    title='Im a Software Engineer'
    selectButton='OFF'; 

    get getTitle(){
        return this.title.toUpperCase();
    }

    get boxStatus(){
        return this.selectButton ==='ON' ?'box green' : 'box red';
    }

    eventHandler(event){
        console.log(event.currentTarget.innerText);
        this.selectButton= event.currentTarget.innerText;
    }
}