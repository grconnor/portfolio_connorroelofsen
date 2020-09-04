
describe("User can see cv list", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
        cy.get("#cv-tab").click();
    });

    it("displays job experience", () => {
        cy.get("#cv-1").within(() => {
            cy.get(".image").should("exist");
            cy.get(".ui.header").should("contain", "Job Experience");
            cy.get(".description").should(
                "contain", "Machine operator and Teamleader"
            );
        });
    });

    it("displays education", () => {
        cy.get("#cv-2").within(() => {
            cy.get(".image").should("exist");
            cy.get(".ui.header").should("contain", "Education");
            cy.get(".description").should(
                "contain", "Fullstack Developer"
            );
        });
    });


});
