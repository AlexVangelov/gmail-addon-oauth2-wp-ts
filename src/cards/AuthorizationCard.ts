/*
 * @Author: Alex Vangelov &lt;email@data.bg&gt; 
 * @Date: 2017-11-26 13:09:27 
 * @Last Modified by: AlexV
 * @Last Modified time: 2017-11-26 13:30:54
 */
import { Card } from "./Card";
import { githubAuth } from '../helpers';

export class AuthorizationCard extends Card {

  constructor(e: GoogleAppsScript.Card.ActionEvent) {
    super(e);
    this.buildHeader();
    this.buildSection();
  }

  buildHeader() {
    let header = CardService.newCardHeader()
      .setTitle('Authorization')
    this._card.setHeader(header);
  }

  buildSection() {
    let section = CardService.newCardSection()
      .addWidget(
        CardService.newTextParagraph().setText(
          'Please authorize access to your GitHub account.'
        )
      )
      .addWidget(
        CardService.newButtonSet().addButton(
          CardService.newTextButton()
            .setText("Authorize")
            .setAuthorizationAction(
              CardService.newAuthorizationAction()
                .setAuthorizationUrl(githubAuth.getAuthorizationUrl())
            )
        ) 
      )
    this._card.addSection(section);
  }
}