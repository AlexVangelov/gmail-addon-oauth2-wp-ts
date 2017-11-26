/*
 * @Author: Alex Vangelov &lt;email@data.bg&gt; 
 * @Date: 2017-11-26 08:38:50 
 * @Last Modified by: AlexV
 * @Last Modified time: 2017-11-26 15:22:23
 */
import { Card } from "./Card";

export class MainCard extends Card {

  constructor(e: GoogleAppsScript.Card.ActionEvent) {
    super(e);
    this.buildHeader();
    this.buildCardActions();
  }

  buildCardActions() {
    let signOutAction = CardService.newCardAction()
      .setText('Sign out')
      .setOnClickAction(
        CardService.newAction()
          .setFunctionName('githubSignOut')
      );
    this._card.addCardAction(signOutAction);
  }

  buildHeader() {
    let header = CardService.newCardHeader()
      .setTitle('Card Header')
    this._card.setHeader(header);
  }
}