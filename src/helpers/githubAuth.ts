/*
 * @Author: Alex Vangelov &lt;email@data.bg&gt; 
 * @Date: 2017-11-26 16:53:50 
 * @Last Modified by:   AlexV 
 * @Last Modified time: 2017-11-26 16:53:50 
 */
declare var OAuth2: any;

export var githubAuth = OAuth2.createService("github")
  .setAuthorizationBaseUrl("https://github.com/login/oauth/authorize")
  .setTokenUrl("https://github.com/login/oauth/access_token")
  .setClientId("-APP_ID-")
  .setClientSecret("-SECRET-")
  .setCallbackFunction("githubAuthCallback")
  .setPropertyStore(PropertiesService.getUserProperties())
  .setCache(CacheService.getUserCache())
  .setScope("user user:email user:follow repo")
  .setParam("approval_prompt", "auto");

export function githubAuthReset() {
  return githubAuth.reset();
} 