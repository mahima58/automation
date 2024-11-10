// describe('Create Customer Order', () =>{
//     beforeEach("load fixture", function () {
//         // Load fixture and assign alias
//         cy.fixture("item").as('itemData');
//       });
//     it('login', function () {
//         cy.visit('https://staging.soorisolutions.com.np/customer-order');
//         cy.wait(3000);
//         cy.get('#UserName').type('tisa');
//         cy.get('#Password').type('@tisa123');
//         cy.get("button[type='submit']").click();
//         cy.url().should('be.equal', 'https://staging.soorisolutions.com.np/customer-order');
//         cy.wait(3000);
//         cy.get('#customer-order-tab').click();
//         cy.get('.btn.create-button').click();
//         cy.get('.css-tlfecz-indicatorContainer').eq(4).click();
//         cy.get('#react-select-14-option-0').click();
//         cy.get('.css-8mmkcg').eq(6).click();
//         cy.get('#react-select-15-option-0').click();
//         cy.get('.css-8mmkcg').eq(8).click(); //bill type
//         cy.get('#react-select-11-option-0').click();
        
//         // cy.get('.css-1hwfws3').eq(10).click(); //batch
//         // cy.get('.css-1n7v3ny-option').click();
        
//      // Use the fixture data loaded via 'cy.get' with alias
//      cy.get('@itemData').then((data) => {  // Correct syntax with a single callback function
//         for (let i = 0; i < 20; i++) {
//             cy.get('.css-1hwfws3').contains(data.item[i]).click();  // item
//             cy.get('#react-select-21-option-0 > span').click();
//         }
//     })
//     })

  
// })
describe('Create Customer Order', () => {
    beforeEach("load fixture", function () {
        // Load fixture and assign alias
        cy.fixture("item").as('itemData');
    });

    it('login and create order', function () {
        cy.visit('https://staging.soorisolutions.com.np/customer-order');
        cy.wait(3000);

        // Login
        cy.get('#UserName').type('tisa');
        cy.get('#Password').type('@tisa123');
        cy.get("button[type='submit']").click();
        cy.url().should('be.equal', 'https://staging.soorisolutions.com.np/customer-order');
        cy.wait(3000);

        // Navigate to create order page
        cy.get('#customer-order-tab').click();
        cy.get('.btn.create-button').click();

        // Select initial options
        cy.get('.css-tlfecz-indicatorContainer').eq(4).click();
        cy.get('#react-select-14-option-0').click();
        cy.get('.css-8mmkcg').eq(6).click();
        cy.get('#react-select-15-option-0').click();
        cy.get('.css-8mmkcg').eq(8).click(); // Bill type
        cy.get('#react-select-11-option-0').click();

        // Use fixture data loaded via alias
        cy.get('@itemData').then((data) => {
            for (let i = 0; i < 11; i++) {
                if (data.item[i]) {  // Ensure the item exists
                    // Click to open dropdown
                    cy.get('.css-1hwfws3').click({ force: true });  
                    
                    // Select the option that matches data.item[i]
                    cy.contains('#react-select-21-option-0', data.item[i])  // Replace with the correct selector for dropdown options
                      .click({ force: true });  
                     
                    // Optional: wait or perform additional actions as needed
                    cy.wait(1000);
                }
            }
        });
    });
});

