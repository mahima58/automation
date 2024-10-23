describe('Create Purchase Order after Login', () => {
    beforeEach("load fixture", function () {
      // Load fixture and assign alias
      cy.fixture("item").as('itemData');
      cy.visit('https://staging.soorisolutions.com.np/purchase-order');
    });
  
    it('Create PO', function () {
      // Login process
      cy.wait(3000);
      cy.get('#UserName').type('mahima');
      cy.get('#Password').type('@mahima123');
      cy.get('.btn').click();
      cy.wait(3000);
      // Ensure login was successful
      cy.url().should('be.equal', 'https://staging.soorisolutions.com.np/purchase-order');
      cy.get('.row > :nth-child(2) > .button-container > .btn').click();
      cy.get('.css-kpcqxn-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click();
      cy.wait(2000);
      cy.get('#react-select-12-option-0').click();
      cy.get(':nth-child(2) > .col-10 > .my-2 > .common-async-select-wrapper > .async-select-field > .css-z3azwa-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click();
      cy.wait(2000);
      cy.get('#react-select-13-option-0').click();
      cy.get(':nth-child(4) > .col-10 > .my-2 > .common-async-select-wrapper > .async-select-field > .css-z3azwa-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click();
      cy.wait(2000);
      cy.get('#react-select-15-option-0').click();
      cy.get(':nth-child(5) > .col-10 > .my-2 > .common-async-select-wrapper > .async-select-field > .css-z3azwa-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click();
      cy.wait(2000);
      cy.get('#react-select-16-option-0').click();
      
      // Use the fixture data loaded via 'cy.get' with alias
      cy.get('@itemData').then((data) => {  // Access fixture data using 'data'
        for (let i = 0; i < 20; i++) {
          cy.get('.purchase-order-form-container > .col-3 > .col-10 > .my-2 > .common-async-select-wrapper > .async-select-field > .css-z3azwa-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click();
          // Use the fixture data to select the correct option
          cy.get('.css-11unzgr').type(data.item[i]);
          cy.wait(2000);
          cy.get('.css-11unzgr').contains(data.item[i]).click();
          cy.get(':nth-child(2) > .my-2 > .common-async-select-wrapper > .async-select-field > .css-z3azwa-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click();
          cy.get('.css-11unzgr').contains('Unit').click();         
          cy.wait(2000);
          
          // Typing quantity and price
          cy.get('.form-control.undefined').eq(6).type('5');  // Quantity
          cy.get('.form-control.undefined').eq(8).type('500');  // Price
          
          // Clicking the button to add the item
          cy.get('[style="margin: 1.9rem 0rem;"] > .button-container > .btn').click();
        }
        cy.get('.btn.create-button.w-100.justify-content-center.d-flex').eq(1).click();    
      });
    });
  });
  