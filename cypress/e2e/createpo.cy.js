describe('Create Purchase Order after Login', () => {
  it('Create PO', () => {

    // beforeEach(() => {
      // Login process
      cy.visit('https://staging.soorisolutions.com.np/purchase-order'); 
      // Replace with your actual login page URL
      cy.wait(3000); // Waits for 5seconds (5000 milliseconds)
      cy.get('#UserName').type('mahima'); // Replace with the correct selector
      cy.get('#Password').type('@mahima123'); // Replace with the correct selector
      cy.get('.btn').click(); // Replace with the correct selector
      cy.wait(3000);
      // Ensure login was successful
      cy.url().should('be.equal', 'https://staging.soorisolutions.com.np/purchase-order'); // Example check to confirm you're logged in
      cy.get('.row > :nth-child(2) > .button-container > .btn').click();
      cy.get('.css-kpcqxn-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click();
      cy.wait(2000);
      // cy.get('#react-select-30-option-0').click();
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
      cy.get('.purchase-order-form-container > .col-3 > .col-10 > .my-2 > .common-async-select-wrapper > .async-select-field > .css-z3azwa-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click();
      cy.wait(2000);
      cy.get('.css-11unzgr').scrollTo('bottom'); // Scrolls to the bottom of the dropdown
      cy.wait(2000);
      cy.get('#react-select-17-option-2').click();
      cy.get(':nth-child(2) > .my-2 > .common-async-select-wrapper > .async-select-field > .css-z3azwa-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click();
      cy.get('.css-11unzgr').contains('Unit').click();         
      cy.wait(2000);
      // cy.get('#react-select-21-option-0').click();
      cy.get('.form-control.undefined').eq(6).type('5');
      cy.get('.form-control.undefined').eq(8).type('500');
      cy.get('[style="margin: 1.9rem 0rem;"] > .button-container > .btn').click();
      cy.get('.purchase-order-form-container > .col-3 > .col-10 > .my-2 > .common-async-select-wrapper > .async-select-field > .css-z3azwa-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click();
      cy.wait(2000);
      cy.get('.css-11unzgr').scrollTo('bottom'); // Scrolls to the bottom of the dropdown
      cy.wait(2000);
      cy.get('#react-select-17-option-3').click();
      cy.get(':nth-child(2) > .my-2 > .common-async-select-wrapper > .async-select-field > .css-z3azwa-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click();
      cy.get('.css-11unzgr').contains('Unit').click();    
      cy.get('.form-control.undefined').eq(6).type('5');
      cy.get('.form-control.undefined').eq(8).type('500');
      cy.get('[style="margin: 1.9rem 0rem;"] > .button-container > .btn').click();
      cy.get('.purchase-order-form-container > .col-3 > .col-10 > .my-2 > .common-async-select-wrapper > .async-select-field > .css-z3azwa-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click();
      cy.wait(2000);
      cy.get('.css-11unzgr').scrollTo('bottom'); // Scrolls to the bottom of the dropdown
      cy.wait(2000);
      cy.get('#react-select-17-option-4').click();
      cy.get(':nth-child(2) > .my-2 > .common-async-select-wrapper > .async-select-field > .css-z3azwa-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click();
      cy.get('.css-11unzgr').contains('Unit').click();    
      cy.get('.form-control.undefined').eq(6).type('5');
      cy.get('.form-control.undefined').eq(8).type('500');
      cy.get('[style="margin: 1.9rem 0rem;"] > .button-container > .btn').click();
      cy.get('.purchase-order-form-container > .col-3 > .col-10 > .my-2 > .common-async-select-wrapper > .async-select-field > .css-z3azwa-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click();
      cy.wait(2000);
      cy.get('.css-11unzgr').scrollTo('bottom'); // Scrolls to the bottom of the dropdown
      cy.wait(2000);
      cy.get('#react-select-17-option-5').click();
      cy.get(':nth-child(2) > .my-2 > .common-async-select-wrapper > .async-select-field > .css-z3azwa-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click();
      cy.get('.css-11unzgr').contains('Unit').click();    
      cy.get('.form-control.undefined').eq(6).type('5');
      cy.get('.form-control.undefined').eq(8).type('500');
      cy.get('[style="margin: 1.9rem 0rem;"] > .button-container > .btn').click();
      cy.get('.purchase-order-form-container > .col-3 > .col-10 > .my-2 > .common-async-select-wrapper > .async-select-field > .css-z3azwa-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click();
      cy.wait(2000);
      cy.get('.css-11unzgr').scrollTo('bottom'); // Scrolls to the bottom of the dropdown
      cy.wait(2000);
      cy.get('#react-select-17-option-6').click();
      cy.get(':nth-child(2) > .my-2 > .common-async-select-wrapper > .async-select-field > .css-z3azwa-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click();
      cy.get('.css-11unzgr').contains('Unit').click();    
      cy.get('.form-control.undefined').eq(6).type('5');
      cy.get('.form-control.undefined').eq(8).type('500');
      cy.get('[style="margin: 1.9rem 0rem;"] > .button-container > .btn').click();
      cy.get('.btn.create-button.w-100.justify-content-center.d-flex').eq(1).click();
    });
    });
    
  // })
// }
// )
//     it('should create a purchase order with random items from a dropdown', () => {
//       const numberOfItemsToAdd = 3; // Adjust how many times you want to add items
  
//       for (let i = 0; i < numberOfItemsToAdd; i++) {
        
//         // Open the dropdown
//         cy.get('[data-cy=item-dropdown]').click(); // Click the dropdown (replace with actual selector)
  
//         // Find all dropdown options and pick one randomly
//         cy.get('[data-cy=item-option]').then($options => {
//           const itemCount = $options.length;
//           const randomIndex = Math.floor(Math.random() * itemCount); // Pick a random index
//           cy.wrap($options[randomIndex]).click(); // Select the item by its random index
//         });
  
//         // Confirm the addition of the selected item
//         cy.get('[data-cy=confirm-add-item]').click(); // Example selector to confirm
//       }
  
//       // Once all items are added, create the purchase order
//       cy.get('[data-cy=create-purchase-order-button]').click();
  
//       // Assert success message or confirmation page
//       cy.get('[data-cy=order-success]').should('contain', 'Order created successfully'); // Example assertion
  
//     });
  
//   });
  