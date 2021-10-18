import { LightningElement, track, wire } from 'lwc';
import Name_Field from '@salesforce/schema/Account.Name';
import sObjectName from '@salesforce/schema/Account';
export default class HelloWorld extends LightningElement {
  @track greeting = 'Virender Singh Negi';
  @track name = 'Name_Field';
  @track objName ='sObjectName';
  contacts=[
      {
        Id:'1210',
        Name:'Viren',
        Title:'Software Engineer'
      },
      {
        Id:'1211',
        Name:'Abhishek',
        Title:'Software Engineer'
      },
      {
        Id:'1212',
        Name:'Lavanya',
        Title:'Data Lead'
      }
  ];
  changeHandler(event) {
    this.greeting = event.target.value;
  }
}