import { LightningElement, track } from 'lwc';

export default class ShapeCalculator extends LightningElement {
    @track currentOutput;
    side;
    length;
    breadth;
    d1; 
    d2;

    sideHandler(event){
        this.side= parseInt(event.target.value);
    }

    lengthHandler(event){
        this.length= parseInt(event.target.value); 
    }

    breadthHandler(event){
        this.breadth= parseInt(event.target.value); 
    }

    d1Handler(event){
        this.d1= parseInt(event.target.value); 
    }

    d2Handler(event){
        this.d2= parseInt(event.target.value); 
    }

    squareHandler(){
        this.currentOutput= "Area of Square is : "+(this.side*this.side);
    }

    rectangleHandler(){
        this.currentOutput="Area of rectangle is : "+(this.length*this.breadth);
    }
    rombusHandler(){
        this.currentOutput ="Area of  rombus is : "+(this.d1*this.d2)/2;
    }

}