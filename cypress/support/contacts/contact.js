import { ContactPageOverviewTab } from "./tabs/overviewTab ";

export class ContactPage {

    OverviewTab = new ContactPageOverviewTab()

    contactpagemethod() {
        alert('contactmethod')
    }

    cypressPageMethod() {
        cy.log('Page level')
    }
}

export const ContactPg = new ContactPage()
