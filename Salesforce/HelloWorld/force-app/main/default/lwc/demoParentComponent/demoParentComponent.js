import { LightningElement } from 'lwc';

export default class DemoParentComponent extends LightningElement {
    userDetails=[
        {
            name:'virender singh negi',
            profile : 'Software Engineer',
            address:'D-944, Dabua Colony, N.I.T Faridabad'
        },
        {
            name:'rizwan khan',
            profile : 'Software Developer',
            address:'Sec-48, Sainik Colony'
        },
        {
            name:'parnav patra',
            profile : 'System Engineer',
            address:'sec-55'
        }
    ]
}