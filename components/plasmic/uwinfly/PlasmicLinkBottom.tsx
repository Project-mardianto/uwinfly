// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iWaiTLt8mAup4ReehswsSx
// Component: PJzwnqkVsmFM

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { useScreenVariants as useScreenVariantssppb0UOhrN5L } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: Sppb0uOhrN5l/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: iWaiTLt8mAup4ReehswsSx/projectcss
import sty from "./PlasmicLinkBottom.module.css"; // plasmic-import: PJzwnqkVsmFM/css

createPlasmicElementProxy;

export type PlasmicLinkBottom__VariantMembers = {};
export type PlasmicLinkBottom__VariantsArgs = {};
type VariantPropType = keyof PlasmicLinkBottom__VariantsArgs;
export const PlasmicLinkBottom__VariantProps = new Array<VariantPropType>();

export type PlasmicLinkBottom__ArgsType = {};
type ArgPropType = keyof PlasmicLinkBottom__ArgsType;
export const PlasmicLinkBottom__ArgProps = new Array<ArgPropType>();

export type PlasmicLinkBottom__OverridesType = {
  root?: Flex__<"a"> & Partial<LinkProps>;
};

export interface DefaultLinkBottomProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicLinkBottom__RenderFunc(props: {
  variants: PlasmicLinkBottom__VariantsArgs;
  args: PlasmicLinkBottom__ArgsType;
  overrides: PlasmicLinkBottom__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantssppb0UOhrN5L()
  });

  return (
    <PlasmicLink__
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.a,
        projectcss.__wab_text,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root
      )}
      component={Link}
      href={`/`}
      platform={"nextjs"}
    >
      {"Home"}
    </PlasmicLink__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLinkBottom__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLinkBottom__VariantsArgs;
    args?: PlasmicLinkBottom__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLinkBottom__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicLinkBottom__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicLinkBottom__ArgProps,
          internalVariantPropNames: PlasmicLinkBottom__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicLinkBottom__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLinkBottom";
  } else {
    func.displayName = `PlasmicLinkBottom.${nodeName}`;
  }
  return func;
}

export const PlasmicLinkBottom = Object.assign(
  // Top-level PlasmicLinkBottom renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicLinkBottom
    internalVariantProps: PlasmicLinkBottom__VariantProps,
    internalArgProps: PlasmicLinkBottom__ArgProps
  }
);

export default PlasmicLinkBottom;
/* prettier-ignore-end */
