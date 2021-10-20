import { LightningElement } from 'lwc';
import signup from './SignupTemplate.html';
import signin from './SigninTemplate.html';
import defaults from './multipleRendering.html'

export default class RenderTemplates extends LightningElement {
    selected = null;

    render(){
        return this.selected === 'signup' ? signup :
        this.selected === 'signin' ? signin : defaults
    }

    handlerClick(event){
        console.log(event.target.innerText);
      this.selected = event.target.innerText;
    }
}