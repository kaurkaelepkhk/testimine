// defineerime
describe('Address Book', function () {
    var addressBook,
        thisContact;
    // kutsume äädressbuuki ja disscontacti valja!
    beforeEach(function() {
        addressBook = new AddressBook();
        thisContact = new Contact();
    });
    // itime veica, et saab kontakteeruda
    it('should be able to contact', function () {
        // lisame kontakte
        addressBook.addContact(thisContact);
        // ekspekteerime
        expect(addressBook.getContact(0)).toBe(thisContact);
    });
    // itime veica veel, et saaks kustutada
    it('should be able to delete a contact', function() {
        // lisa
        addressBook.addContact(thisContact);
        // kustuta
        addressBook.deleteContact(0);
        // ekspekteerime, et sõber meil kustutatud
        expect(addressBook.getContact(0)).not.toBeDefined();
    });
});
// teeme asünkrooni värki ka veica
describe('Async Address Book', function() {
    // itime veica, et peab krabama initsiaalsed kontaktid
    it('should grab initial contacts', function() {
        // teeme variable milleks määrame uue aadressiraamatu!!!
        var addressBook = new AddressBook();
        // ennem funktsiooni on asjaga juba finito
        beforeEach(function(done) {
            // väike asünkroonne lisamine meil siin tehtud
            addressBook.getInitialContacts(function() {
                done();
            });
        });
        // itime veica, et peab krabama initsiaalsed kontaktid
        it('should grab inital contacts', function(done) {
            // lisamine === true
            expect(addressBook.initialComplete).toBe(true);
            // donso alfonso
            done();
        });
    });
});