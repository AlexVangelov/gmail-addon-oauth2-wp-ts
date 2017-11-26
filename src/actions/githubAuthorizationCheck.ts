/*
 * @Author: Alex Vangelov &lt;email@data.bg&gt; 
 * @Date: 2017-11-26 16:53:10 
 * @Last Modified by:   AlexV 
 * @Last Modified time: 2017-11-26 16:53:10 
 */
declare var global: any;

import { githubAuth, authorizationException } from '../helpers';

global.githubAuthorizationCheck = ()=> {
  if (!githubAuth.hasAccess()) {
    return authorizationException();
  }
}