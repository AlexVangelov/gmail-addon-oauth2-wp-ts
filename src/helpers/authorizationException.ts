/*
 * @Author: Alex Vangelov &lt;email@data.bg&gt; 
 * @Date: 2017-11-26 16:53:45 
 * @Last Modified by:   AlexV 
 * @Last Modified time: 2017-11-26 16:53:45 
 */
import { githubAuth } from './githubAuth';

export function authorizationException () {
  CardService.newAuthorizationException()
    .setAuthorizationUrl(githubAuth.getAuthorizationUrl())
    .setResourceDisplayName("Github Resource")
    .setCustomUiCallback("createAuthorizationUi")
    .throwException();
}