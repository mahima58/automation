describe('Create new item', () => {
    it('Create item', () => {
        const generateRandomItemName = () => {
            const randomString = Math.random().toString(36).substring(7, 10); // Generates a random string
            return 'Item' + randomString; // Prepends 'Item-' to the random string
          };
        const newItem = generateRandomItemName();
      // beforeEach(() => {
        // Login process
        cy.visit('https://staging.soorisolutions.com.np/item'); 
        // Replace with your actual login page URL
        cy.wait(3000); // Waits for 5seconds (5000 milliseconds)
        cy.get('#UserName').type('mahima'); // Replace with the correct selector
        cy.get('#Password').type('@mahima123'); // Replace with the correct selector
        cy.get('.btn').click(); // Replace with the correct selector
        cy.wait(3000);
        // Ensure login was successful
        cy.url().should('be.equal', 'https://staging.soorisolutions.com.np/item'); // Example check to confirm you're logged in

        cy.get('.btn.create-button').click();//create button
        cy.get('.form-control.undefined').eq(0).type(newItem);//item type
        cy.get('.css-1hwfws3').eq(3).click();//category
        cy.get('#react-select-9-option-3').click();
        cy.get('.css-1hwfws3').eq(4).click();//subcategory
        cy.get('.css-1hwfws3').eq(4).type('Masala B');
        cy.wait(3000);
        cy.get('.css-11unzgr').eq(0).contains('Masala B').click();
        cy.get('.css-1hwfws3').eq(5).click();//unit
        cy.get('#react-select-11-option-4').click();
        cy.get('.css-1hwfws3').eq(6).click();//type
        cy.get('#react-select-8-option-0').click();
        cy.get('.form-control.undefined').eq(2).type(newItem);//harmonie code
        cy.get('.css-1hwfws3').eq(7).click();//manufacture
        cy.get('#react-select-12-option-0').click();
        cy.get('.form-control.undefined').eq(4).type('13');//tax
        cy.get('.form-control.undefined').eq(5).type('100');//minimum
        cy.get('.form-control.undefined').eq(6).type('150');//safety
        cy.get('.btn.create-button.mr-2').click();//save
    });
});