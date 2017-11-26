/*
 * @Author: Alex Vangelov &lt;email@data.bg&gt; 
 * @Date: 2017-11-26 08:38:46 
 * @Last Modified by:   AlexV 
 * @Last Modified time: 2017-11-26 08:38:46 
 */
export abstract class Card {
  _event: GoogleAppsScript.Card.ActionEvent;
  _card: GoogleAppsScript.Card.CardBuilder;

  constructor(e: GoogleAppsScript.Card.ActionEvent) {
    this._event = e;
    this._card = CardService.newCardBuilder();
  }

  build() {
    return this._card.build();
  }
}