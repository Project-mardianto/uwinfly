// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import { PageParamsProvider as PageParamsProvider__ } from "@plasmicapp/react-web/lib/host";
import GlobalContextsProvider from "../components/plasmic/uwinfly/PlasmicGlobalContextsProvider";
import { ScreenVariantProvider } from "../components/plasmic/uwinfly/PlasmicGlobalVariant__Screen";
import { PlasmicPersyaratan } from "../components/plasmic/uwinfly/PlasmicPersyaratan";
import { useRouter } from "next/router";

function Persyaratan() {
  // Use PlasmicPersyaratan to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicPersyaratan are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, PlasmicPersyaratan is wrapped by your project's global
  // variant context providers. These wrappers may be moved to
  // Next.js Custom App component
  // (https://nextjs.org/docs/advanced-features/custom-app).
  return (
    <GlobalContextsProvider>
      <PageParamsProvider__
        route={useRouter()?.pathname}
        params={useRouter()?.query}
        query={useRouter()?.query}
      >
        <script async src="https://cse.google.com/cse.js?cx=a57e7f63f92bd473d"></script>
        <div className="gcse-search"></div>
        <PlasmicPersyaratan />
      </PageParamsProvider__>
    </GlobalContextsProvider>
  );
}

export default Persyaratan;
