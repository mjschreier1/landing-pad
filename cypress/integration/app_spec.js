describe("App", () => {
  it("displays all components correctly", () => {
    cy.visit("/")

    // Test weather component spinner during initial API call
    cy.get("app-weather mat-progress-spinner")
      .should("have.attr", "mode", "indeterminate")

    cy.get(".spinner-message")
      .should("contain", "Loading weather data")

    // Test app component
    cy.get("mat-toolbar-row")
      .should("contain", "Landing Pad")

    // Test navigation to about component
    cy.get("mat-icon:first")
      .click()

    cy.get("mat-drawer:last")
      .should("be.visible")
      .and("contain", "App Name")
      .and("contain", "Version")
      .and("contain", "About")

    cy.get("mat-drawer-container")
      .click()

    // Test navigation to settings component
    cy.get("mat-icon:last")
      .should("be.visible")
      .click()

    cy.get("mat-drawer:first")
      .should("be.visible")
      .and("contain", "Display Military Time")
      .and("contain", "Manually Enter Location")

    cy.get("mat-drawer-container")
      .click()

    // Test name component
    cy.get("app-name input")
      .should("have.attr", "placeholder", "Hello! Please enter your name:")
      .type("Kyle Coberly")

    cy.get("app-name button")
      .should("have.attr", "value", "submit")
      .and("have.attr", "color", "accent")
      .click()

    cy.get("app-name h2")
      .should("contain", "Kyle Coberly")

    // Test time component
    const monthValidator = { 0: "January", 1: "February", 2: "March", 3: "April", 4: "May", 5: "June", 6: "July", 7: "August", 8: "September", 9: "October", 10: "November", 11: "December" };

    const weekdayValidator = { 0: "Sunday", 1: "Monday", 2: "Tuesday", 3: "Wednesday", 4: "Thursday", 5: "Friday", 6: "Saturday" };

    cy.get("app-time h4")
      .should("contain", monthValidator[new Date().getMonth()])
      .should("contain", weekdayValidator[new Date().getDay()])
      .should("contain", new Date().getDate())

    cy.get("app-time h3")
      .should("contain", (new Date().getHours() % 12))
      .should("contain", new Date().getMinutes())

    // Test weather component
    cy.get("app-weather p")
      .should("contain", "Cloud Cover")
      .and("contain", "Humidity")
      .and("contain", "Chance of Precipitation")
      .and("contain", "Visibility")
      .and("contain", "Wind")
      .and("contain", "Wind Gusts")

    cy.get("app-weather main>section>div>i")
      .should("have.length", 7)

    // Test persistence of name in local storage
    cy.visit("/")

    cy.get("app-name h2")
      .should("contain", "Kyle Coberly");

    // Test reset name button
    cy.get("mat-icon:last")
      .click()

    cy.get("mat-drawer:first button")
      .should("be.visible")
      .click()

    cy.visit("/")

    cy.get("app-name input")
      .should("have.attr", "placeholder", "Hello! Please enter your name:");
  })
})
