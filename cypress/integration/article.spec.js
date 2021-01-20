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

  it("should show the article body", () => {
    cy.get("#articleBody").contains(
      "Please see the attached letter and information leaflet regarding the New National Covid Restrictions. Should you have any queries please contact the academy office"
    );
  });

  it("should show the article pdfs", () => {
    cy.get("#0").contains("National Restrictions.pdf");
    cy.get("#1").contains("Guidance for parents.pdf");
  });
});
