export interface ScopesApiContext {
  /**
   * Returns scope details.
   *
   * @returns The scope details.
   *
   * @example
   * <caption>Query for scopes.</caption>
   * <description>Call `scopes.query` to get scope details.</description>
   * ```ts
   * // TODO: EXAMPLES
   * ```
   **/
  query: () => Promise<ScopesDetail>;
  request: (scopes: string[]) => Promise<void>;
  revoke: (scopes: string[]) => Promise<RevokeResponse>;
}

export interface RevokeResponse {
  revoked: string[];
}
export interface ScopesDetail {
  granted: string[];
  required: string[];
  optional: string[];
}
