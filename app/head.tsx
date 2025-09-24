import React from "react";

// This `head.tsx` file is rendered into the <head> of every page in the
// Next.js app router. We insert the provided Google tag here when the
// `NEXT_PUBLIC_GOOGLE_TAG_ID` environment variable is set.

// `head.tsx` is rendered into the <head> of every page. The project uses the
// `AnalyticsProvider` (in `app/_providers`) to inject Google Analytics. To
// avoid duplication we remove manual GA snippet injection here and rely on
// the provider exclusively. If you need meta tags added later, place them
// in this file.

export default function Head() {
  return null;
}
