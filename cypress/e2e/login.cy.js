const e = "nru37504@inohm.com";

describe("Sign In Test", () => {
  it("log int to an account", () => {
    cy.visit("https://www.codeproject.com/");
    cy.get('[data-micromodal-trigger="modal-1"]').click();
    cy.get("#Email").type(e);
    cy.get("#Password").type(e);
    cy.get(".signin").click();
  });
});
