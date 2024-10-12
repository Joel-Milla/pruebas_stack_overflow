describe('StackOverflow API Test for .NET Core Search', () => {
    it('should return search results for .NET Core', () => {
      cy.request('https://api.stackexchange.com/2.3/search?order=desc&sort=activity&intitle=CSharp&site=stackoverflow')
        .then((response) => {

          expect(response.status).to.eq(200);

          expect(response.body.items.length).to.be.greaterThan(0);
  

          cy.log(`Number of results: ${response.body.items.length}`);
  
  
          response.body.items.forEach((item, index) => {
            cy.log(`Result ${index + 1}: ${item.title}`);
          });
        });
    });
  });