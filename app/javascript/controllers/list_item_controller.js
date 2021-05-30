import { Controller } from "stimulus"
import StimulusReflex from "stimulus_reflex"
import Sortable from "sortablejs"

export default class extends Controller {

    static targets = ["form", "modal", "item"]

    connect() {
        StimulusReflex.register(this)

        Sortable.create(this.itemTarget, {
            onEnd: (e) => this.reorder(e),
        });


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

    editItem(e) {
        console.log("dfkj;sdklfj;lkasdjf;lasjdf;lajsdflahdsgiarehfjskldjf;lasjd")
        console.log(e.currentTarget.dataset.listItemId)
        this.stimulate("ListItem#edit", e.currentTarget.dataset.listItemId)
        e.preventDefault();

        let modalController = this.application.getControllerForElementAndIdentifier(
            this.modalTarget,
            "modal"
        );
        modalController.open();

    }

}
