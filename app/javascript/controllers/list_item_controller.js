import { Controller } from "stimulus"
import StimulusReflex from "stimulus_reflex"

export default class extends Controller {

static targets = ["form"]

connect(){
	StimulusReflex.register(this)
 }

 destroy(event){
 	const confirmation = confirm("Are you sure?")
 	if(confirmation){
    event.preventDefault()
   
 	this.stimulate("ListItem#destroy", event.currentTarget)
  }
 }

 
 createSuccess(){
  
  this.formTarget.reset();
 }
}