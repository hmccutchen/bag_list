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
 
}
