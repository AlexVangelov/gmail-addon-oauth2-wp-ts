/*
 * @Author: Alex Vangelov &lt;email@data.bg&gt; 
 * @Date: 2017-11-26 14:00:17 
 * @Last Modified by:   AlexV 
 * @Last Modified time: 2017-11-26 14:00:17 
 */
declare var global: any;

import { githubAuth } from '../helpers';

global.githubAuthCallback = (e)=> {
  let isAuthorized = githubAuth.handleCallback(e);
  if (isAuthorized) {
    return HtmlService.createHtmlOutput(
      'Success! <script>setTimeout(function() { top.window.close() }, 1);</script>'
    );
  } else {
    return HtmlService.createHtmlOutput('Denied');
  }
}