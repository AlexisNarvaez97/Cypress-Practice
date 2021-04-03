/// <reference types="cypress" />


describe('Primer conjunto de casos de prueba', () => {

    beforeEach(() => {
        cy.visit('http://automationpractice.com/index.php')
    })

    // Caso de prueba
    it('Contabilizar la cantidad de elementos en la sección de página principal', () => {
        // Verificar el tamaño de elementos
        cy.get('#homefeatured .product-container').should('have.length', 7)

        // Nombrando la lista para poder ser utilizada despues.
        cy.get('#homefeatured .product-container').as('productosPopulares')


        cy.get('@productosPopulares').should('have.length', 7)

    });


    it('Agregar elementos de tipo "Blouse" al carrito de compra desde la página principal', () => {
        cy.get('#homefeatured .product-container').as('productosPopulares')
        cy.get('@productosPopulares')
        .find('.product-name')
        .each(($el, idx, $list) => {
            if ($el.attr('title') === 'Blouse') {
                cy.log('Se ha encontrado el elemento buscado')
                // cy.get('@productosPopulares').eq(idx).find('.button.ajax_add_to_cart_button span').click();
                cy.get('@productosPopulares').eq(idx).contains('Add to cart').click();
            }

        })
        
    });
    
});