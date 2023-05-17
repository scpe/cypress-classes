import { ConactPageEditIndividualModal } from "../modals/editIndividual"

export class ContactPageOverviewTab {
    constructor() {
        this.EditIndividual = new ConactPageEditIndividualModal()
    }

    tabMethod() {
        alert('tabmethod')
    }
    cypressTabMethod() {
        cy.log('Tab level')
    }
}
