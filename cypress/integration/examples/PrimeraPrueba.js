/// <reference types="cypress" />


describe('Primer conjunto de casos de prueba', () => {

    // Caso de prueba
    it('Contabilizar la cantidad de elementos en la sección de página principal', () => {

        cy.visit('http://automationpractice.com/index.php')

        // Verificar el tamaño de elementos
        cy.get('#homefeatured .product-container').should('have.length', 7)

        // Nombrando la lista para poder ser utilizada despues.
        cy.get('#homefeatured .product-container').as('productosPopulares')


        cy.get('@productosPopulares').should('have.length', 7)

    });
    
});