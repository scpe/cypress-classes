import  ContactPage  from '../../support/contacts/contact'

describe('describe...', ()=> {
    it('it...', ()=> {
        let ContactPg = new ContactPage()

        ContactPg.contactpagemethod()
        ContactPg.OverviewTab.tabmethod();
        ContactPg.OverviewTab.EditIndividualModal.edit();
    })
})