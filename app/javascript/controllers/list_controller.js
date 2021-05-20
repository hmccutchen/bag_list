import { Controller } from "stimulus"
import StimulusReflex from "stimulus_reflex"

export default class extends Controller {
static targets = ["modal"]

connect(){
	StimulusReflex.register(this)
 }
 
 
 addList(e){
   let modalController = this.application.getControllerForElementAndIdentifier(
      this.modalTarget,
      "modal"
     );
     modalController.open();
 }
 
 destroy(event){
 	const confirmation = confirm("Delete this list?")
 	if(confirmation){
    event.preventDefault()
 	this.stimulate("List#destroy", event.currentTarget)
  }
 }
}
