import { Controller } from "stimulus"
import StimulusReflex from "stimulus_reflex"

export default class extends Controller {


connect(){
	StimulusReflex.register(this)
 }

 destroy(){
 	const confirmation = confirm("Are you sure?")
 	if(confirmation){
 	this.stimulate("ListItem#destroy", event.currentTarget)
  }
 }
}