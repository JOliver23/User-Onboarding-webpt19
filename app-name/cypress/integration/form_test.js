describe("test the form inputs w/ missing entries", function() {
    this.beforeEach(function () {
        cy.visit("http://localhost:3000/")
    });

    it("fills form entry w/ data", function(){

        cy.get('[for="email"] > input')
        .type("Mr_Le'Blob@bob.com")
        .should("have.value", "Mr_Le'Blob@bob.com")

        cy.get('#password')
        .type("Bob-Le'Password")
        .should("have.value", "Bob-Le'Password")

        cy.get('#terms')
        .check()
        .should("be.checked")

        cy.get('button')
        // .click()
        .should("be.disabled")
        
    })
});

describe("test the form inputs and submission", function() {
    this.beforeEach(function () {
        cy.visit("http://localhost:3000/")
    });

    it("fills form entry w/ data", function(){
        cy.get('[data-cy = name')
        .type("Bob Le'Blob")
        .should("have.value", "Bob Le'Blob");

        cy.get('[for="email"] > input')
        .type("Mr_Le'Blob@bob.com")
        .should("have.value", "Mr_Le'Blob@bob.com")

        cy.get('#password')
        .type("Bob-Password")
        .should("have.value", "Bob-Password")

        cy.get('#terms')
        .check()
        .should("be.checked")

        cy.get('form')
        .submit()
        
    })
});
