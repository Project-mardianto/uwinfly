// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iWaiTLt8mAup4ReehswsSx
// Component: qoZVCK7paFuV

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

import Button2 from "../../Button2"; // plasmic-import: bn8Yy5q1VEYE/component

import { useScreenVariants as useScreenVariantssppb0UOhrN5L } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: Sppb0uOhrN5l/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: iWaiTLt8mAup4ReehswsSx/projectcss
import sty from "./PlasmicFooterMain.module.css"; // plasmic-import: qoZVCK7paFuV/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: q0SxIWf05NzX/icon
import Icon4Icon from "./icons/PlasmicIcon__Icon4"; // plasmic-import: Fvg9iqGVtOYx/icon

createPlasmicElementProxy;

export type PlasmicFooterMain__VariantMembers = {};
export type PlasmicFooterMain__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooterMain__VariantsArgs;
export const PlasmicFooterMain__VariantProps = new Array<VariantPropType>();

export type PlasmicFooterMain__ArgsType = {};
type ArgPropType = keyof PlasmicFooterMain__ArgsType;
export const PlasmicFooterMain__ArgProps = new Array<ArgPropType>();

export type PlasmicFooterMain__OverridesType = {
  root?: Flex__<"div">;
  freeBox?: Flex__<"div">;
  rowWrapper?: Flex__<"div">;
  colmn1?: Flex__<"div">;
  colmn2?: Flex__<"div">;
  colmn22?: Flex__<"div">;
  colmn3?: Flex__<"div">;
  button2?: Flex__<typeof Button2>;
};

export interface DefaultFooterMainProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicFooterMain__RenderFunc(props: {
  variants: PlasmicFooterMain__VariantsArgs;
  args: PlasmicFooterMain__ArgsType;
  overrides: PlasmicFooterMain__OverridesType;
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
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
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
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <Stack__
          as={"div"}
          data-plasmic-name={"rowWrapper"}
          data-plasmic-override={overrides.rowWrapper}
          hasGap={true}
          className={classNames(projectcss.all, sty.rowWrapper)}
        >
          <div
            data-plasmic-name={"colmn1"}
            data-plasmic-override={overrides.colmn1}
            className={classNames(projectcss.all, sty.colmn1)}
          >
            <h3
              className={classNames(
                projectcss.all,
                projectcss.h3,
                projectcss.__wab_text,
                sty.h3__fSiH
              )}
            >
              {"Tentang kami"}
            </h3>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___0MB1H
              )}
            >
              {
                "\u00a9 Company. All rights reserved. CV. Mitra Sejahtera Indonesia"
              }
            </div>
          </div>
          <div
            data-plasmic-name={"colmn2"}
            data-plasmic-override={overrides.colmn2}
            className={classNames(projectcss.all, sty.colmn2)}
          >
            <h3
              className={classNames(
                projectcss.all,
                projectcss.h3,
                projectcss.__wab_text,
                sty.h3__pnFxZ
              )}
            >
              {"Kerja sama"}
            </h3>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__lnQj0
              )}
              component={Link}
              href={`/`}
              platform={"nextjs"}
            >
              {"Home"}
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__rioZd
              )}
              component={Link}
              href={`/about-us`}
              platform={"nextjs"}
            >
              {"Tentang kami"}
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link___4PIj0
              )}
              component={Link}
              href={`/Mitra`}
              platform={"nextjs"}
            >
              {"Mitra"}
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__fbqHe
              )}
              component={Link}
              href={`/persyaratan`}
              platform={"nextjs"}
            >
              {"Persyaratan"}
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__zP66D
              )}
              component={Link}
              href={`/Blog`}
              platform={"nextjs"}
            >
              {"Blog"}
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__jydYt
              )}
              component={Link}
              platform={"nextjs"}
            >
              {"Kontak kami"}
            </PlasmicLink__>
          </div>
          <div
            data-plasmic-name={"colmn22"}
            data-plasmic-override={overrides.colmn22}
            className={classNames(projectcss.all, sty.colmn22)}
          >
            <h3
              className={classNames(
                projectcss.all,
                projectcss.h3,
                projectcss.__wab_text,
                sty.h3__hnc9Z
              )}
            >
              {"Ecommerce "}
            </h3>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__iBkUw
              )}
              component={Link}
              href={`/Produk`}
              platform={"nextjs"}
            >
              {"Best seller"}
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__pnby8
              )}
              component={Link}
              href={`/Produk`}
              platform={"nextjs"}
            >
              {"Produk"}
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link___3XnM6
              )}
              component={Link}
              platform={"nextjs"}
            >
              {"Promo"}
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__imSqX
              )}
              component={Link}
              href={`/Service`}
              platform={"nextjs"}
            >
              {"Services "}
            </PlasmicLink__>
          </div>
          <div
            data-plasmic-name={"colmn3"}
            data-plasmic-override={overrides.colmn3}
            className={classNames(projectcss.all, sty.colmn3)}
          >
            <h3
              className={classNames(
                projectcss.all,
                projectcss.h3,
                projectcss.__wab_text,
                sty.h3___73JbW
              )}
            >
              {"Contact "}
            </h3>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__spWJ
              )}
            >
              {"Jl. Raya Gandul  No.1 Kel. Gandul, Kec. Cinere, Kota Depok"}
            </div>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__tkvfp
              )}
            >
              {"Telepon / whatsapp\n0812-8105-908"}
            </div>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__gowbw
              )}
            >
              {"Email\nuwinfly.mitra@gmail.com"}
            </div>
            <Button2
              data-plasmic-name={"button2"}
              data-plasmic-override={overrides.button2}
              className={classNames("__wab_instance", sty.button2)}
            >
              {"Kontak kami"}
            </Button2>
          </div>
        </Stack__>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "freeBox",
    "rowWrapper",
    "colmn1",
    "colmn2",
    "colmn22",
    "colmn3",
    "button2"
  ],
  freeBox: [
    "freeBox",
    "rowWrapper",
    "colmn1",
    "colmn2",
    "colmn22",
    "colmn3",
    "button2"
  ],
  rowWrapper: [
    "rowWrapper",
    "colmn1",
    "colmn2",
    "colmn22",
    "colmn3",
    "button2"
  ],
  colmn1: ["colmn1"],
  colmn2: ["colmn2"],
  colmn22: ["colmn22"],
  colmn3: ["colmn3", "button2"],
  button2: ["button2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  rowWrapper: "div";
  colmn1: "div";
  colmn2: "div";
  colmn22: "div";
  colmn3: "div";
  button2: typeof Button2;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooterMain__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooterMain__VariantsArgs;
    args?: PlasmicFooterMain__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFooterMain__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicFooterMain__ArgsType,
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
          internalArgPropNames: PlasmicFooterMain__ArgProps,
          internalVariantPropNames: PlasmicFooterMain__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFooterMain__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooterMain";
  } else {
    func.displayName = `PlasmicFooterMain.${nodeName}`;
  }
  return func;
}

export const PlasmicFooterMain = Object.assign(
  // Top-level PlasmicFooterMain renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    rowWrapper: makeNodeComponent("rowWrapper"),
    colmn1: makeNodeComponent("colmn1"),
    colmn2: makeNodeComponent("colmn2"),
    colmn22: makeNodeComponent("colmn22"),
    colmn3: makeNodeComponent("colmn3"),
    button2: makeNodeComponent("button2"),

    // Metadata about props expected for PlasmicFooterMain
    internalVariantProps: PlasmicFooterMain__VariantProps,
    internalArgProps: PlasmicFooterMain__ArgProps
  }
);

export default PlasmicFooterMain;
/* prettier-ignore-end */
