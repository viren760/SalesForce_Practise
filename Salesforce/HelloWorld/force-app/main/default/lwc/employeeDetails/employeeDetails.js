import { LightningElement ,track} from 'lwc';

export default class EmployeeDetails extends LightningElement {
    something=true;
    @track id;
    @track name;
    @track profile;
    @track speciality;

    idHandler(event){
        this.id= event.target.value;
    }
    nameHandler(event){
        this.name= event.target.value;
    }
    profileHandler(event){
        this.profile= event.target.value;
    }
    specialityHandler(event){
        this.speciality= event.target.value;
    }
}