/*
 * @Author: Alex Vangelov &lt;email@data.bg&gt; 
 * @Date: 2017-11-26 08:07:41 
 * @Last Modified by: AlexV
 * @Last Modified time: 2017-11-26 09:42:09
 */
declare var global: any;

import { MainCard } from '../cards';

global.GetContextualAddOn = (e: GoogleAppsScript.Card.ActionEvent)=> {
  let card = new MainCard(e);
  return [card.build()];
}