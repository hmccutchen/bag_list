import { Controller } from "stimulus"
import StimulusReflex from "stimulus_reflex"
import Sortable from "sortablejs"

export default class extends Controller {
  static targets = ["modal", "lists"]

  connect() {
    StimulusReflex.register(this)
    Sortable.create(this.listsTarget, {
      onEnd: (e) => this.reorder(e),
    })
  }

  reorder(e) {
    this.stimulate("List#reorder", e.item, e.newIndex)
  }

  addList(e) {
    let modalController = this.application.getControllerForElementAndIdentifier(
      this.modalTarget,
      "modal"
    );
    modalController.open();
  }

  destroy(event) {
    const confirmation = confirm("Delete this list?")
    if (confirmation) {
      event.preventDefault()
      this.stimulate("List#destroy", event.currentTarget)
    }
  }
}
