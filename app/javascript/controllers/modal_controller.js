import { Controller } from "stimulus"
import StimulusReflex from "stimulus_reflex"

export default class extends Controller {


 connect() {
  StimulusReflex.register(this)
 }


 open() {
  document.body.classList.add("modal-open");
  console.log(this.element)
  this.element.setAttribute("style", "display: block;");
  this.element.classList.add("show");
  document.body.innerHTML += '<div id="modal-backdrop" class="modal-backdrop show"></div>';

 }

 close() {

  document.body.classList.remove("modal-open");
  this.element.removeAttribute("style");
  this.element.classList.remove("show");
  document.getElementsByClassName("modal-backdrop")[0].remove();
 }

}
