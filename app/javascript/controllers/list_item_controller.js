import { Controller } from "stimulus"
import StimulusReflex from "stimulus_reflex"
import Sortable from "sortablejs"

export default class extends Controller {

    static targets = ["form", "modal", "item"]

    connect() {
        StimulusReflex.register(this)

        Sortable.create(this.itemTarget, {
            onEnd: (e) => this.reorder(e),
        })


    }

    reorder(e) {
        this.stimulate("ListItem#reorder", e.item, e.newIndex)
    }

    destroy(event) {
        const confirmation = confirm("Are you sure?")
        if (confirmation) {
            event.preventDefault()

            this.stimulate("ListItem#destroy", event.currentTarget)
        }
    }
    addItem(e) {
        let modalController = this.application.getControllerForElementAndIdentifier(
            this.modalTarget,
            "modal"
        );
        modalController.open();
    }


    createSuccess() {

        this.formTarget.reset();
    }



}
