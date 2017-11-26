declare var global: any;

import { AuthorizationCard } from '../cards';

global.createAuthorizationUi = (e)=> {
  let card = new AuthorizationCard(e);
  return [card.build()];
}