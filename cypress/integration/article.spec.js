describe("Article", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("#427").click();
    cy.get("#57537").click();
  });

  it("should direct to the correct URL", () => {
    cy.url().should("eq", "http://localhost:3000/schools/427/news/57537");
  });

  it("should show the school name", () => {
    cy.get("#schoolTitle").should("have.text", "Ash Croft Primary Academy");
  });

  it("should show the article headline", () => {
    cy.get("#articleTitle").should(
      "have.text",
      "Letter to all parents - New National Restrictions"
    );
  });
});
