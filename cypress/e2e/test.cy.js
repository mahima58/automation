describe('Check the login functionality', () => {
    it('Test login', () => {
        cy.visit('https://staging.soorisolutions.com.np/');
        cy.wait(3000);
        cy.get('#UserName').type('tisa');
        cy.get('#Password').type('@tisa123');
        cy.get("button[type='submit']").click();
        cy.url().should('be.equal', 'https://staging.soorisolutions.com.np/');
        cy.wait(3000);
        cy.get('.active').eq(0).click();
        cy.wait(3000)
        cy.url().should('be.equal', 'https://staging.soorisolutions.com.np/purchase-order');
        
    })

    // it('Check the purchase functionality', () => {
    //     // cy.visit('https://staging.soorisolutions.com.np/purchase-order');
    //     // cy.wait(3000);
    //     cy.get('.metismenu > :nth-child(1) > a').click();
    //     cy.url().should('be.equal', 'https://staging.soorisolutions.com.np/purchase-order');
        
    // })

})