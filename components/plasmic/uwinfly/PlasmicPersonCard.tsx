// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iWaiTLt8mAup4ReehswsSx
// Component: f9uslMKyhzrO

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
import sty from "./PlasmicPersonCard.module.css"; // plasmic-import: f9uslMKyhzrO/css

import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: 3iiT-sS-cZAa/icon
import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: ntI9YLgFAIJv/icon
import Icon3Icon from "./icons/PlasmicIcon__Icon3"; // plasmic-import: kpmSMoO6j0QE/icon

createPlasmicElementProxy;

export type PlasmicPersonCard__VariantMembers = {};
export type PlasmicPersonCard__VariantsArgs = {};
type VariantPropType = keyof PlasmicPersonCard__VariantsArgs;
export const PlasmicPersonCard__VariantProps = new Array<VariantPropType>();

export type PlasmicPersonCard__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  image?: React.ComponentProps<typeof PlasmicImg__>["src"];
  slot2?: React.ReactNode;
};
type ArgPropType = keyof PlasmicPersonCard__ArgsType;
export const PlasmicPersonCard__ArgProps = new Array<ArgPropType>(
  "children",
  "slot",
  "image",
  "slot2"
);

export type PlasmicPersonCard__OverridesType = {
  root?: Flex__<"div">;
  img?: Flex__<typeof PlasmicImg__>;
  h1?: Flex__<"h1">;
};

export interface DefaultPersonCardProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  image?: React.ComponentProps<typeof PlasmicImg__>["src"];
  slot2?: React.ReactNode;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicPersonCard__RenderFunc(props: {
  variants: PlasmicPersonCard__VariantsArgs;
  args: PlasmicPersonCard__ArgsType;
  overrides: PlasmicPersonCard__OverridesType;
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
      <PlasmicImg__
        data-plasmic-name={"img"}
        data-plasmic-override={overrides.img}
        alt={""}
        className={classNames(sty.img)}
        displayHeight={"336px"}
        displayMaxHeight={"none"}
        displayMaxWidth={"100%"}
        displayMinHeight={"0"}
        displayMinWidth={"0"}
        displayWidth={"100%"}
        loading={"lazy"}
        src={args.image}
      />

      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox___5EUEa)}
      >
        <h1
          data-plasmic-name={"h1"}
          data-plasmic-override={overrides.h1}
          className={classNames(projectcss.all, projectcss.h1, sty.h1)}
        >
          {renderPlasmicSlot({
            defaultContents: "Becca Kingsman",
            value: args.children,
            className: classNames(sty.slotTargetChildren)
          })}
        </h1>
        <div className={classNames(projectcss.all, sty.freeBox__ouxBm)}>
          {renderPlasmicSlot({
            defaultContents: "Job title",
            value: args.slot,
            className: classNames(sty.slotTargetSlot)
          })}
        </div>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__fUoVj)}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <React.Fragment>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__r87Si
                  )}
                  component={Link}
                  href={`/`}
                  platform={"nextjs"}
                >
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg___21Wwd)}
                    href={"https://www.linkedin.com/"}
                    link={"https://www.linkedin.com/"}
                    role={"img"}
                  />
                </PlasmicLink__>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__fFLb
                  )}
                  component={Link}
                  href={`/`}
                  platform={"nextjs"}
                >
                  <Icon2Icon
                    className={classNames(projectcss.all, sty.svg__dOxgt)}
                    role={"img"}
                  />
                </PlasmicLink__>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__ubb8G
                  )}
                  component={Link}
                  href={`/`}
                  platform={"nextjs"}
                >
                  <Icon3Icon
                    className={classNames(projectcss.all, sty.svg__lwu6C)}
                    role={"img"}
                  />
                </PlasmicLink__>
              </React.Fragment>
            ),
            value: args.slot2
          })}
        </Stack__>
      </Stack__>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "img", "h1"],
  img: ["img"],
  h1: ["h1"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  img: typeof PlasmicImg__;
  h1: "h1";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPersonCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPersonCard__VariantsArgs;
    args?: PlasmicPersonCard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPersonCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPersonCard__ArgsType,
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
          internalArgPropNames: PlasmicPersonCard__ArgProps,
          internalVariantPropNames: PlasmicPersonCard__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPersonCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPersonCard";
  } else {
    func.displayName = `PlasmicPersonCard.${nodeName}`;
  }
  return func;
}

export const PlasmicPersonCard = Object.assign(
  // Top-level PlasmicPersonCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    h1: makeNodeComponent("h1"),

    // Metadata about props expected for PlasmicPersonCard
    internalVariantProps: PlasmicPersonCard__VariantProps,
    internalArgProps: PlasmicPersonCard__ArgProps
  }
);

export default PlasmicPersonCard;
/* prettier-ignore-end */
