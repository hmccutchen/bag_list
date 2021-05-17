import { Controller } from "stimulus"
import StimulusReflex from "stimulus_reflex"

export default class extends Controller {
<<<<<<< HEAD
  static targets = ["form"];
=======
static targets = ["form"]
>>>>>>> 927472146a8d7afc887d4b2d9f7013dbdc41244a

connect(){
	StimulusReflex.register(this)
 }

 destroy(){
 	const confirmation = confirm("Are you sure?")
 	if(confirmation){
 	this.stimulate("ListItem#destroy", event.currentTarget)
  }
 }
<<<<<<< HEAD

 createSuccess(){
 	this.formTarget.reset();
=======
 
 createSuccess(){
  console.log(this.formTarget)
  // this.formTarget.reset();
>>>>>>> 927472146a8d7afc887d4b2d9f7013dbdc41244a
 }
}