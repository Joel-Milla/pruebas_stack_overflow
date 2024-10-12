//Commands

Cypress.Commands.add("LoginAPI", () => {
  cy.request("POST", "https://rahulshettyacademy.com/api/ecom/auth/login", {
    userEmail: "mail@gmail.com",
    userPassword: "psw",
  }).then(function (resp) {
    expect(resp.status).to.eq(200);
    Cypress.env("token", resp.body.token);
  });
});
//Login example
describe("JWT Session", () => {
  it("is logged", () => {
    cy.LoginAPI().then(() => {
      cy.visit("https://rahulshettyacademy.com/client", {
        onBeforeLoad: function (window) {
          window.localStorage.setItem("token", Cypress.env("token"));
        },
      });
    });

    cy.get(".card-body button:last-of-type").eq(1).click();
  });
});
