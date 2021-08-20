/*
 * Guitar songbook project
 *
 * @author Rustam Mukhametshin <https://github.com/iproman>
 * @link https://github.com/iproman
 * @copyright Copyright (c) Rustam Mukhametshin, LLC, 2021
 */

describe('AddSong', () => {
  it('Add song', () => {
    const songName = 'Song name';
    const initialPause = 200;

    cy.visit('/');

    cy.get('ion-list > ion-item').first().click();

    // Add song
    cy.wait(initialPause);
    cy.get('#addSong').click();

    cy.wait(initialPause);
    cy.get('ion-input[formcontrolname="title"]')
      .type(songName)
    ;

    cy.wait(initialPause);
    cy.get('ion-input[formcontrolname="initialPause"]')
      .type('12')
    ;

    cy.wait(initialPause);
    cy.get('ion-input[formcontrolname="duration"]')
      .type('250')
    ;

    cy.wait(initialPause);
    cy.get('#save').click();

    // Check adding
    cy.wait(initialPause);
    cy.url().should('include', '/customs/1?type=custom');

    cy.wait(initialPause);
    cy.get('app-songs > ion-content > ion-list > ion-item ion-label:last').should('have.text', songName);

  });
});
