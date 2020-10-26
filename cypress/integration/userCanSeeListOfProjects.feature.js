describe("User can see list of projects", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("#projects-tab").click();
  });

  it("displays first project", () => {
    cy.get("#project-1").within(() => {
      cy.get(".image").should("exist");
      cy.get(".ui.header").should("contain", "BMI Calculator");
      cy.get(".description").should(
        "contain",
        "With this application you are able to find out if you are either healthy, overweight, obese or extremely obese!"
      );
    });
  });

  it("displays second project", () => {
    cy.get("#project-2").within(() => {
      cy.get(".image").should("exist");
      cy.get(".ui.header").should("contain", "ATM Functions");
      cy.get(".description").should(
        "contain",
        "With this application you are able to create your own account, deposit and also withdraw money from the account you have been creating!"
      );
    });
  });

  it("displays second project", () => {
    cy.get("#project-3").within(() => {
      cy.get(".image").should("exist");
      cy.get(".ui.header").should("contain", "A Simple Library");
      cy.get(".description").should(
        "contain",
        "In this Library application you are able to see a few books stored. You can see the return date on the ones that aren't available and also checkout the one you desire."
      );
    });
  });
});
