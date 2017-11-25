/*
 * @Author: Alex Vangelov &lt;email@data.bg&gt; 
 * @Date: 2017-11-25 12:51:00 
 * @Last Modified by: AlexV
 * @Last Modified time: 2017-11-25 12:51:59
 */
declare var global: any;
global.GetContextualAddOn = (e)=> {
  let card = CardService.newCardBuilder()
    .setHeader(
      CardService.newCardHeader()
        .setTitle('Card Header')
    )
  return [card.build()];
}