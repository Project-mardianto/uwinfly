// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iWaiTLt8mAup4ReehswsSx
// Component: Dh2YVzmzoTLy

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
import sty from "./PlasmicServiceValue.module.css"; // plasmic-import: Dh2YVzmzoTLy/css

createPlasmicElementProxy;

export type PlasmicServiceValue__VariantMembers = {};
export type PlasmicServiceValue__VariantsArgs = {};
type VariantPropType = keyof PlasmicServiceValue__VariantsArgs;
export const PlasmicServiceValue__VariantProps = new Array<VariantPropType>();

export type PlasmicServiceValue__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
};
type ArgPropType = keyof PlasmicServiceValue__ArgsType;
export const PlasmicServiceValue__ArgProps = new Array<ArgPropType>(
  "children",
  "slot"
);

export type PlasmicServiceValue__OverridesType = {
  root?: Flex__<"div">;
  h3?: Flex__<"h3">;
};

export interface DefaultServiceValueProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicServiceValue__RenderFunc(props: {
  variants: PlasmicServiceValue__VariantsArgs;
  args: PlasmicServiceValue__ArgsType;
  overrides: PlasmicServiceValue__OverridesType;
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
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root
      )}
    >
      <h3
        data-plasmic-name={"h3"}
        data-plasmic-override={overrides.h3}
        className={classNames(projectcss.all, projectcss.h3, sty.h3)}
      >
        {renderPlasmicSlot({
          defaultContents: "Value",
          value: args.children
        })}
      </h3>
      <div className={classNames(projectcss.all, sty.freeBox___6CAi)} />

      <div className={classNames(projectcss.all, sty.freeBox__kOf48)}>
        {renderPlasmicSlot({
          defaultContents:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
          value: args.slot
        })}
      </div>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "h3"],
  h3: ["h3"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  h3: "h3";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicServiceValue__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicServiceValue__VariantsArgs;
    args?: PlasmicServiceValue__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicServiceValue__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicServiceValue__ArgsType,
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
          internalArgPropNames: PlasmicServiceValue__ArgProps,
          internalVariantPropNames: PlasmicServiceValue__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicServiceValue__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicServiceValue";
  } else {
    func.displayName = `PlasmicServiceValue.${nodeName}`;
  }
  return func;
}

export const PlasmicServiceValue = Object.assign(
  // Top-level PlasmicServiceValue renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h3: makeNodeComponent("h3"),

    // Metadata about props expected for PlasmicServiceValue
    internalVariantProps: PlasmicServiceValue__VariantProps,
    internalArgProps: PlasmicServiceValue__ArgProps
  }
);

export default PlasmicServiceValue;
/* prettier-ignore-end */
