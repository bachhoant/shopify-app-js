export interface ScopesApiContext {
  /**
   * // TODO: should we include server.ts code for enabling scopes API future flag?
   * Returns scope details.
   *
   * @returns The scope details.
   *
   * @example
   * <caption>Query for scopes details.</caption>
   * <description>Call `scopes.query` to get scope details.</description>
   * ```ts
   * // /apps/routes/**\/*.ts
   * import { authenticate } from "../shopify.server";
   * ```
   **/
  query: () => Promise<ScopesDetail>;

  /**
   * Redirect to the grant screen when optional scopes that have not been granted yet by the merchant are specified, otherwise it returns null.
   *
   * **Warning** This method performs a server-side redirect.
   * We recommend you do your own validation to ensure that the optional scopes being requested have not yet been granted.
   *
   * @example
   * <caption>Request for optional scopes.</caption>
   * <description>Call `scopes.request` to get request optional scopes.</description>
   * ```ts
   * ```
   **/
  request: (scopes: string[]) => Promise<void>;

  /**
   * Revokes the specified optional scopes.
   *
   * **Warning** This method performs a server-side redirect.
   * We recommend you do your own validation to ensure that the optional scopes being requested have not yet been granted.
   * This method throws an error if the specified optional scopes are invalid*
   * **TODO: how much should we expose regarding what consitutes invalid**
   *
   * @example
   * <caption>Revoke optional scopes.</caption>
   * <description>Call `scopes.revoke` to revoke optional scopes.</description>
   * ```ts
   * ```
   **/
  revoke: (scopes: string[]) => Promise<RevokeResponse>;
}

export interface RevokeResponse {
  /**
   * The list of scope handles that have been revoked.
   */
  revoked: string[];
}
export interface ScopesDetail {
  /**
   * The list of scope handles that have been granted.
   */
  granted: string[];
  /**
   * The list of scope handles that are required.
   */
  required: string[];
  /**
   * The list of scope handles that are optional.
   */
  optional: string[];
}
