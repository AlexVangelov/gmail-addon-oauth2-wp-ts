/*
 * @Author: Alex Vangelov &lt;email@data.bg&gt; 
 * @Date: 2017-11-26 08:38:50 
 * @Last Modified by:   AlexV 
 * @Last Modified time: 2017-11-26 08:38:50 
 */
import { Card } from "./card";

export class MainCard extends Card {

  constructor(e: GoogleAppsScript.Card.ActionEvent) {
    super(e);
    this.buildHeader();
  }

  buildHeader() {
    let header = CardService.newCardHeader()
      .setTitle('Card Header')
    this._card.setHeader(header);
  }
}