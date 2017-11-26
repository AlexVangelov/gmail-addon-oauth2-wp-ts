/*
 * @Author: Alex Vangelov &lt;email@data.bg&gt; 
 * @Date: 2017-11-26 16:53:16 
 * @Last Modified by:   AlexV 
 * @Last Modified time: 2017-11-26 16:53:16 
 */
declare var global: any;

import { githubAuth, authorizationException } from '../helpers';

global.githubSignOut = (e)=> {
  githubAuth.reset();
  return authorizationException();
}