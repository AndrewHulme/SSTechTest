describe("Article", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should show the school name", () => {
    cy.url().should("eq", "http://localhost:3000/schools");

    cy.get("#427").click();
    cy.url().should("eq", "http://localhost:3000/schools/427/news");

    cy.get("#57537").click();
    cy.url().should("eq", "http://localhost:3000/schools/427/news/57537");

    cy.get("#schoolTitle").should("have.text", "Ash Croft Primary Academy");
  });
});
