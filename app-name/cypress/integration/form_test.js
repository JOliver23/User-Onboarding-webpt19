describe("test the form inputs and submission", function() {
    this.beforeEach(function () {
        cy.visit("http://localhost:3000/")
    });

    it("fills name entry w/ name", function(){
        cy.get('[data-cy = name')
        .type("Bob Le'Blob")
        .should("have.value", "Bob Le'Blob");
    })
});