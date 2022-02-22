goog.provide("goog.html.trustedtypes");
goog.html.trustedtypes.cachedPolicy_;
goog.html.trustedtypes.getPolicyPrivateDoNotAccessOrElse = function() {
  if (!goog.TRUSTED_TYPES_POLICY_NAME) {
    return null;
  }
  if (goog.html.trustedtypes.cachedPolicy_ === undefined) {
    goog.html.trustedtypes.cachedPolicy_ = goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME + "#html");
  }
  return goog.html.trustedtypes.cachedPolicy_;
};

//# sourceMappingURL=goog.html.trustedtypes.js.map
