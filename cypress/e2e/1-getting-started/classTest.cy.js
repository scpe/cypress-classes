import { ContactPg } from '../../support/contacts/contact'

describe('describe...', () => {
    it('it...', () => {

        ContactPg.contactpagemethod()
        ContactPg.OverviewTab.tabMethod();
        ContactPg.OverviewTab.EditIndividual.editIndividual();
    })

    it.only('Slava test', () => {
        ContactPg.cypressPageMethod()
        ContactPg.OverviewTab.cypressTabMethod()
        ContactPg.OverviewTab.EditIndividual.cypressModalMethod()

    })
})