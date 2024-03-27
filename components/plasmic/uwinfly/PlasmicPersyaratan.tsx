// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iWaiTLt8mAup4ReehswsSx
// Component: eg2P8gcyEiGj

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
import * as plasmicAuth from "@plasmicapp/react-web/lib/auth";
import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";

import { NavigationBar } from "@plasmicpkgs/plasmic-nav";
import Link1 from "../../Link1"; // plasmic-import: Wk3pm7NzsIY9/component
import Link2 from "../../Link2"; // plasmic-import: f0ftlBRhAHPN/component
import Link3 from "../../Link3"; // plasmic-import: P6OuWwiFq4gQ/component
import Link4 from "../../Link4"; // plasmic-import: b5zzKfYNksQk/component
import Link5 from "../../Link5"; // plasmic-import: jy_zqM-l3sYE/component
import Link6 from "../../Link6"; // plasmic-import: qdfwHKfwtv8_/component
import Button from "../../Button"; // plasmic-import: f3lmI1Q2JQuQ/component
import { AntdTabs } from "@plasmicpkgs/antd5/skinny/registerTabs";
import { AntdTabItem } from "@plasmicpkgs/antd5/skinny/registerTabs";
import HomeFooterTop from "../../HomeFooterTop"; // plasmic-import: sRA5PV1tz8Fx/component
import FooterMain from "../../FooterMain"; // plasmic-import: qoZVCK7paFuV/component
import { PlasmicHead } from "@plasmicapp/react-web";

import { useScreenVariants as useScreenVariantssppb0UOhrN5L } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: Sppb0uOhrN5l/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: iWaiTLt8mAup4ReehswsSx/projectcss
import sty from "./PlasmicPersyaratan.module.css"; // plasmic-import: eg2P8gcyEiGj/css

import ProfileCircleSvgrepoCom1SvgIcon from "./icons/PlasmicIcon__ProfileCircleSvgrepoCom1Svg"; // plasmic-import: 0qa3aoynIlk5/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: q0SxIWf05NzX/icon
import BestSellersvgIcon from "./icons/PlasmicIcon__BestSellersvg"; // plasmic-import: gEr3vmMDIr_A/icon
import MotorcyclesvgIcon from "./icons/PlasmicIcon__Motorcyclesvg"; // plasmic-import: bB21gLC1MPi2/icon
import PinsvgIcon from "./icons/PlasmicIcon__Pinsvg"; // plasmic-import: d5Rc8pnBZxlJ/icon
import ArrowLeftSvgrepoComsvgIcon from "./icons/PlasmicIcon__ArrowLeftSvgrepoComsvg"; // plasmic-import: n23QXdz0xMhj/icon
import Icon4Icon from "./icons/PlasmicIcon__Icon4"; // plasmic-import: Fvg9iqGVtOYx/icon

createPlasmicElementProxy;

export type PlasmicPersyaratan__VariantMembers = {};
export type PlasmicPersyaratan__VariantsArgs = {};
type VariantPropType = keyof PlasmicPersyaratan__VariantsArgs;
export const PlasmicPersyaratan__VariantProps = new Array<VariantPropType>();

export type PlasmicPersyaratan__ArgsType = {};
type ArgPropType = keyof PlasmicPersyaratan__ArgsType;
export const PlasmicPersyaratan__ArgProps = new Array<ArgPropType>();

export type PlasmicPersyaratan__OverridesType = {
  root?: Flex__<"div">;
  navigationBar?: Flex__<typeof NavigationBar>;
  link1?: Flex__<typeof Link1>;
  link2?: Flex__<typeof Link2>;
  link3?: Flex__<typeof Link3>;
  link4?: Flex__<typeof Link4>;
  link5?: Flex__<typeof Link5>;
  link6?: Flex__<typeof Link6>;
  h2?: Flex__<"h2">;
  tabs?: Flex__<typeof AntdTabs>;
  footerTopSection?: Flex__<"div">;
  homeFooterTop?: Flex__<typeof HomeFooterTop>;
  footerMain?: Flex__<typeof FooterMain>;
  pageMetadataOverride?: Flex__<typeof PlasmicHead>;
};

export interface DefaultPersyaratanProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicPersyaratan__RenderFunc(props: {
  variants: PlasmicPersyaratan__VariantsArgs;
  args: PlasmicPersyaratan__ArgsType;
  overrides: PlasmicPersyaratan__OverridesType;
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "tabs.activeKey",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantssppb0UOhrN5L()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicPersyaratan.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicPersyaratan.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicPersyaratan.pageMetadata.title}
        />
        <meta
          key="description"
          name="description"
          content={PlasmicPersyaratan.pageMetadata.description}
        />
        <meta
          key="og:description"
          property="og:description"
          content={PlasmicPersyaratan.pageMetadata.description}
        />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={PlasmicPersyaratan.pageMetadata.description}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
          <section className={classNames(projectcss.all, sty.section___6MbQd)}>
            <NavigationBar
              data-plasmic-name={"navigationBar"}
              data-plasmic-override={overrides.navigationBar}
              brand={
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link___2N4
                  )}
                  component={Link}
                  href={`/`}
                  platform={"nextjs"}
                >
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__gbna6)}
                    displayHeight={"100px"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"none"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"auto"}
                    src={{
                      src: "/plasmic/uwinfly/images/logopng.png",
                      fullWidth: 512,
                      fullHeight: 512,
                      aspectRatio: undefined
                    }}
                  />
                </PlasmicLink__>
              }
              className={classNames("__wab_instance", sty.navigationBar)}
              closeButton={
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img___79QRb)}
                  displayHeight={
                    hasVariant(globalVariants, "screen", "mobile")
                      ? "20px"
                      : "auto"
                  }
                  displayMaxHeight={"none"}
                  displayMaxWidth={"none"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={
                    hasVariant(globalVariants, "screen", "mobile")
                      ? "20px"
                      : "auto"
                  }
                  src={
                    hasVariant(globalVariants, "screen", "mobile")
                      ? {
                          src: "/plasmic/uwinfly/images/_3F1C0155019E22Ca2146D6372Fa054D8Svg.svg",
                          fullWidth: 150,
                          fullHeight: 150,
                          aspectRatio: 1
                        }
                      : "https://static1.plasmic.app/close.svg"
                  }
                />
              }
              forceOpenMenu={
                hasVariant(globalVariants, "screen", "mobile")
                  ? false
                  : undefined
              }
              itemsGap={hasVariant(globalVariants, "screen", "mobile") ? 8 : 8}
              menuItems={
                <React.Fragment>
                  <PlasmicLink__
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link__r1Glz
                    )}
                    component={Link}
                    href={`/`}
                    platform={"nextjs"}
                  >
                    <Link1
                      data-plasmic-name={"link1"}
                      data-plasmic-override={overrides.link1}
                      className={classNames("__wab_instance", sty.link1)}
                    />
                  </PlasmicLink__>
                  <PlasmicLink__
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link__x3Wfg
                    )}
                    component={Link}
                    href={`/about-us`}
                    platform={"nextjs"}
                  >
                    <Link2
                      data-plasmic-name={"link2"}
                      data-plasmic-override={overrides.link2}
                      className={classNames("__wab_instance", sty.link2)}
                    />
                  </PlasmicLink__>
                  <PlasmicLink__
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link___5COwT
                    )}
                    component={Link}
                    href={`/Mitra`}
                    platform={"nextjs"}
                  >
                    <Link3
                      data-plasmic-name={"link3"}
                      data-plasmic-override={overrides.link3}
                      className={classNames("__wab_instance", sty.link3)}
                    />
                  </PlasmicLink__>
                  <PlasmicLink__
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link__ud9Nb
                    )}
                    component={Link}
                    href={`/Blog`}
                    platform={"nextjs"}
                  >
                    <Link4
                      data-plasmic-name={"link4"}
                      data-plasmic-override={overrides.link4}
                      className={classNames("__wab_instance", sty.link4)}
                    />
                  </PlasmicLink__>
                  <PlasmicLink__
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link__p8OMj
                    )}
                    component={Link}
                    href={`/persyaratan`}
                    platform={"nextjs"}
                  >
                    <Link5
                      data-plasmic-name={"link5"}
                      data-plasmic-override={overrides.link5}
                      className={classNames("__wab_instance", sty.link5)}
                    />
                  </PlasmicLink__>
                  <PlasmicLink__
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link__apNbX
                    )}
                    component={Link}
                    platform={"nextjs"}
                  >
                    <Link6
                      data-plasmic-name={"link6"}
                      data-plasmic-override={overrides.link6}
                      className={classNames("__wab_instance", sty.link6)}
                    />
                  </PlasmicLink__>
                  <PlasmicLink__
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link__hg3Mq
                    )}
                    component={Link}
                    href={`/Profile`}
                    platform={"nextjs"}
                  >
                    <ProfileCircleSvgrepoCom1SvgIcon
                      className={classNames(projectcss.all, sty.svg__bkHac)}
                      role={"img"}
                    />
                  </PlasmicLink__>
                </React.Fragment>
              }
              openButton={
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img___5QZma)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={
                    hasVariant(globalVariants, "screen", "mobile")
                      ? "25px"
                      : "35px"
                  }
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"100%"}
                  src={{
                    src: "/plasmic/uwinfly/images/iconsvg.svg",
                    fullWidth: 231,
                    fullHeight: 150,
                    aspectRatio: 1.537966
                  }}
                />
              }
              responsiveBreakpoint={768}
            />

            <section className={classNames(projectcss.all, sty.section__jN5FX)}>
              <div className={classNames(projectcss.all, sty.columns__s39Rh)}>
                <div
                  className={classNames(projectcss.all, sty.column___8S1Gc)}
                />

                <div
                  className={classNames(projectcss.all, sty.column__nto9K)}
                />
              </div>
            </section>
          </section>
          <section className={classNames(projectcss.all, sty.section___5Xyth)}>
            <div className={classNames(projectcss.all, sty.columns__cnGIb)}>
              <div className={classNames(projectcss.all, sty.column__zAhgs)}>
                <Button
                  className={classNames("__wab_instance", sty.button__euMmv)}
                  showStartIcon={true}
                >
                  {"Best seller"}
                </Button>
              </div>
              <div className={classNames(projectcss.all, sty.column__lsPTn)}>
                <Button
                  className={classNames("__wab_instance", sty.button__fGgC4)}
                  showStartIcon={true}
                  startIcon={
                    <BestSellersvgIcon
                      className={classNames(projectcss.all, sty.svg__dx6I4)}
                      role={"img"}
                    />
                  }
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__m20TM
                    )}
                  >
                    {"Best seller"}
                  </div>
                </Button>
              </div>
              <div className={classNames(projectcss.all, sty.column__xWyW)}>
                <Button
                  className={classNames("__wab_instance", sty.button__hggAb)}
                  showStartIcon={true}
                  startIcon={
                    <MotorcyclesvgIcon
                      className={classNames(projectcss.all, sty.svg__rlXl2)}
                      role={"img"}
                    />
                  }
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__x1TBd
                    )}
                  >
                    {"Produk"}
                  </div>
                </Button>
              </div>
              <div className={classNames(projectcss.all, sty.column__xCHkH)}>
                <Button
                  className={classNames("__wab_instance", sty.button__jbMPv)}
                  link={`/Service`}
                  showStartIcon={true}
                  startIcon={
                    <PinsvgIcon
                      className={classNames(projectcss.all, sty.svg__vaK8I)}
                      role={"img"}
                    />
                  }
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__antRt
                    )}
                  >
                    {"Service"}
                  </div>
                </Button>
              </div>
            </div>
          </section>
          {(hasVariant(globalVariants, "screen", "mobile") ? true : false) ? (
            <div className={classNames(projectcss.all, sty.columns__xeMVu)}>
              <div className={classNames(projectcss.all, sty.column___3PSp)}>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__wnueo
                  )}
                  component={Link}
                  href={`/`}
                  platform={"nextjs"}
                >
                  <ArrowLeftSvgrepoComsvgIcon
                    className={classNames(projectcss.all, sty.svg__h8I7Z)}
                    role={"img"}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__ply55
                    )}
                  >
                    {"  Balik Menu"}
                  </div>
                </PlasmicLink__>
              </div>
              <div className={classNames(projectcss.all, sty.column__isqSc)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__l7E5
                  )}
                >
                  {"Januari 24, 2024"}
                </div>
              </div>
            </div>
          ) : null}
          <section className={classNames(projectcss.all, sty.section__gpdPq)}>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.columns__bq97U)}
            >
              <div className={classNames(projectcss.all, sty.column__aNHmo)}>
                <Button
                  className={classNames("__wab_instance", sty.button__plKc)}
                  showStartIcon={true}
                  startIcon={
                    <BestSellersvgIcon
                      className={classNames(projectcss.all, sty.svg__b0ZRw)}
                      role={"img"}
                    />
                  }
                >
                  {"Best seller"}
                </Button>
              </div>
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.column__kbztV
                )}
                component={Link}
                href={`/Produk`}
                platform={"nextjs"}
              >
                <Button
                  className={classNames("__wab_instance", sty.button__g4WT4)}
                  showStartIcon={true}
                  startIcon={
                    <MotorcyclesvgIcon
                      className={classNames(projectcss.all, sty.svg__ppZw9)}
                      role={"img"}
                    />
                  }
                >
                  {"Produk"}
                </Button>
              </PlasmicLink__>
              <div className={classNames(projectcss.all, sty.column___8MwJ)}>
                <Button
                  className={classNames("__wab_instance", sty.button__uz45)}
                  link={`/Service`}
                  showStartIcon={true}
                  startIcon={
                    <PinsvgIcon
                      className={classNames(projectcss.all, sty.svg__ox49F)}
                      role={"img"}
                    />
                  }
                >
                  {"Service"}
                </Button>
              </div>
            </Stack__>
          </section>
          <div className={classNames(projectcss.all, sty.freeBox__pBbPt)}>
            <div className={classNames(projectcss.all, sty.freeBox__rDaN0)}>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.columns__oum9N)}
              >
                <div className={classNames(projectcss.all, sty.column__uc7Ir)}>
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__hijnC)}
                    displayHeight={
                      hasVariant(globalVariants, "screen", "mobile")
                        ? "172px"
                        : "322px"
                    }
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"100%"}
                    loading={"lazy"}
                    src={
                      hasVariant(globalVariants, "screen", "mobile")
                        ? {
                            src: "/plasmic/uwinfly/images/_9616Convertedpng3.png",
                            fullWidth: 2069,
                            fullHeight: 992,
                            aspectRatio: undefined
                          }
                        : {
                            src: "/plasmic/uwinfly/images/_9616Convertedpng3.png",
                            fullWidth: 2069,
                            fullHeight: 992,
                            aspectRatio: undefined
                          }
                    }
                  />
                </div>
                <div className={classNames(projectcss.all, sty.column__ad9Cx)}>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__gjgxc)}
                  >
                    <h2
                      data-plasmic-name={"h2"}
                      data-plasmic-override={overrides.h2}
                      className={classNames(
                        projectcss.all,
                        projectcss.h2,
                        projectcss.__wab_text,
                        sty.h2
                      )}
                    >
                      {hasVariant(globalVariants, "screen", "mobile")
                        ? "Tentang kami"
                        : "Tentang kami"}
                    </h2>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__ziCo6
                      )}
                    >
                      {hasVariant(globalVariants, "screen", "mobile")
                        ? "Solusi tepat mempunyai dealer motor listrik dan sepeda listrik, uwinfly terjamin dan terpercaya untuk inventasi anda "
                        : "Solusi tepat mempunyai dealer motor listrik dan sepeda listrik, uwinfly terjamin dan terpercaya untuk inventasi anda "}
                    </div>
                    <section
                      className={classNames(projectcss.all, sty.section__k8Qot)}
                    >
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__hihC
                        )}
                      >
                        {"Daftar sekarang"}
                      </Button>
                    </section>
                  </Stack__>
                  <section
                    className={classNames(projectcss.all, sty.section__soWx3)}
                  >
                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__tjtVt
                      )}
                      endIcon={
                        <Icon4Icon
                          className={classNames(projectcss.all, sty.svg__wMjbv)}
                          role={"img"}
                        />
                      }
                      showEndIcon={true}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__z6IB4
                        )}
                      >
                        {"Daftar Sekarang"}
                      </div>
                    </Button>
                  </section>
                </div>
              </Stack__>
            </div>
          </div>
          <section className={classNames(projectcss.all, sty.section__sWmjZ)}>
            <AntdTabs
              data-plasmic-name={"tabs"}
              data-plasmic-override={overrides.tabs}
              activeKey={generateStateValueProp($state, ["tabs", "activeKey"])}
              animateTabBar={true}
              animateTabContent={false}
              animated={true}
              className={classNames("__wab_instance", sty.tabs)}
              items={
                <React.Fragment>
                  <AntdTabItem
                    className={classNames("__wab_instance", sty.tabItem__wkHu)}
                    key={"1"}
                    label={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__sRlZy
                        )}
                      >
                        {"Persyaratan"}
                      </div>
                    }
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__nqra
                      )}
                    >
                      {
                        "1. Warga Negara Indonesia\n\n2. KTP\n\n3. NPWP\n\n4. Memiliki Kartu Keluarga\n\n5. Menyediakan Ruang Usaha Minimal 2 Ruko (Milik Sendiri/Sewa)\n\n6. memilih paket waralaba 200Jt atau distributor 180Jt\n\n7. Investasi Pendirian yang tertera di (NPWP) Toko Dan Biaya Waralaba atau distributor"
                      }
                    </div>
                  </AntdTabItem>
                  <AntdTabItem
                    className={classNames("__wab_instance", sty.tabItem__lrSq)}
                    key={"2"}
                    label={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__up7YK
                        )}
                      >
                        {"Prosedur"}
                      </div>
                    }
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___0Ug6I
                      )}
                    >
                      {
                        "1. Formulir Pendaftan\n\nMengisi Formulir Pendaftaran, Calon Mitra Memilih Paket Harga Yang Sudah Di sediakan.\n\n2. Konfirmasi Pendaftaran\n\nKami Akan konfirmasi Calon Mitra Melalui Telepon atau Pesan.\n\n3. Pengecekan Dokuman\n\nUwinflay Akan Melakukan Survey Lokasi, Dengan Kunjungan Ke Lokasi Yang Sudah Di Tentukan Calon Dan Pengecekan Dokuman Seperti NPWP, KTP, Kartu Keluarga.\n\n4. Presentasi Pertama\n\nPada Presentasi Pertama Ini Akan Dijelaskan Dengan Detail Mekanisme Kerjasama, Besarnya Investasi, Sistem Operasional Toko, Sistem Pembagian Keuntungan, Dan Sistem Pelaporan.\n\n5. Presentasi Kedua\n\nPada Presentasi Kedua Akan Dipaparkan Hasil Survey Rencana Anggaran Belanja (RAB) Yang Mengarah Pada Besarnya Nilai Investasi. Pada Presentasi Kedua Ini Dilanjutkan Dengan Penandatanganan MOU (Nota Kesepakatan) Yang Mencakup Butir-Butir Pembagian Tugas Antara Pihak Uwinfly Dengan Calon Mitra Dalam Mempersiapkan Pembukaan Toko.\n\n6. Pembukaan Toko\n\nSetelah Semua Kewajiban Pembayaran Diselesaikan Maka Dilakukan Penandatanganan Surat Perjanjian Waralaba Untuk Jangka Waktu 1 Tahun 50% kemitraan. Selanjutnya Dilakukanlah Realisasi Pembukaan Toko. Toko Siap Dibuka Dengan Program Promosi Yang Ditetapkan Uwinfly."
                      }
                    </div>
                  </AntdTabItem>
                </React.Fragment>
              }
              onChange={generateStateOnChangeProp($state, [
                "tabs",
                "activeKey"
              ])}
              sticky={false}
              tabBarBackground={"#FFF"}
              tabsDropdownScopeClassName={sty["tabs__tabsDropdown"]}
              tabsScopeClassName={sty["tabs__tabs"]}
            />
          </section>
          <div
            data-plasmic-name={"footerTopSection"}
            data-plasmic-override={overrides.footerTopSection}
            className={classNames(projectcss.all, sty.footerTopSection)}
          >
            <HomeFooterTop
              data-plasmic-name={"homeFooterTop"}
              data-plasmic-override={overrides.homeFooterTop}
              className={classNames("__wab_instance", sty.homeFooterTop)}
            />
          </div>
          <FooterMain
            data-plasmic-name={"footerMain"}
            data-plasmic-override={overrides.footerMain}
            className={classNames("__wab_instance", sty.footerMain)}
          />

          <PlasmicHead
            data-plasmic-name={"pageMetadataOverride"}
            data-plasmic-override={overrides.pageMetadataOverride}
            canonical={"https://uwinfly.co.id/persyaratan"}
            className={classNames("__wab_instance", sty.pageMetadataOverride)}
            description={
              "persyaratan apa saja ingin menjadi distributor atau waralaba uwinfly "
            }
            image={"/plasmic/uwinfly/images/logopng.png"}
            title={"persyaratan "}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "navigationBar",
    "link1",
    "link2",
    "link3",
    "link4",
    "link5",
    "link6",
    "h2",
    "tabs",
    "footerTopSection",
    "homeFooterTop",
    "footerMain",
    "pageMetadataOverride"
  ],
  navigationBar: [
    "navigationBar",
    "link1",
    "link2",
    "link3",
    "link4",
    "link5",
    "link6"
  ],
  link1: ["link1"],
  link2: ["link2"],
  link3: ["link3"],
  link4: ["link4"],
  link5: ["link5"],
  link6: ["link6"],
  h2: ["h2"],
  tabs: ["tabs"],
  footerTopSection: ["footerTopSection", "homeFooterTop"],
  homeFooterTop: ["homeFooterTop"],
  footerMain: ["footerMain"],
  pageMetadataOverride: ["pageMetadataOverride"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  navigationBar: typeof NavigationBar;
  link1: typeof Link1;
  link2: typeof Link2;
  link3: typeof Link3;
  link4: typeof Link4;
  link5: typeof Link5;
  link6: typeof Link6;
  h2: "h2";
  tabs: typeof AntdTabs;
  footerTopSection: "div";
  homeFooterTop: typeof HomeFooterTop;
  footerMain: typeof FooterMain;
  pageMetadataOverride: typeof PlasmicHead;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPersyaratan__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPersyaratan__VariantsArgs;
    args?: PlasmicPersyaratan__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPersyaratan__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPersyaratan__ArgsType,
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
          internalArgPropNames: PlasmicPersyaratan__ArgProps,
          internalVariantPropNames: PlasmicPersyaratan__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPersyaratan__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPersyaratan";
  } else {
    func.displayName = `PlasmicPersyaratan.${nodeName}`;
  }
  return func;
}

function withPlasmicPageGuard<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const PageGuard: React.FC<P> = props => (
    <PlasmicPageGuard__
      minRole={null}
      appId={"iWaiTLt8mAup4ReehswsSx"}
      authorizeEndpoint={"https://studio.plasmic.app/authorize"}
      canTriggerLogin={true}
    >
      <WrappedComponent {...props} />
    </PlasmicPageGuard__>
  );

  return PageGuard;
}

function withUsePlasmicAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const WithUsePlasmicAuthComponent: React.FC<P> = props => {
    const dataSourceCtx = usePlasmicDataSourceContext() ?? {};
    const { isUserLoading, user, token } = plasmicAuth.usePlasmicAuth({
      appId: "iWaiTLt8mAup4ReehswsSx"
    });

    return (
      <PlasmicDataSourceContextProvider__
        value={{
          ...dataSourceCtx,
          isUserLoading,
          userAuthToken: token,
          user
        }}
      >
        <WrappedComponent {...props} />
      </PlasmicDataSourceContextProvider__>
    );
  };
  return WithUsePlasmicAuthComponent;
}

export const PlasmicPersyaratan = Object.assign(
  // Top-level PlasmicPersyaratan renders the root element
  withUsePlasmicAuth(withPlasmicPageGuard(makeNodeComponent("root"))),
  {
    // Helper components rendering sub-elements
    navigationBar: makeNodeComponent("navigationBar"),
    link1: makeNodeComponent("link1"),
    link2: makeNodeComponent("link2"),
    link3: makeNodeComponent("link3"),
    link4: makeNodeComponent("link4"),
    link5: makeNodeComponent("link5"),
    link6: makeNodeComponent("link6"),
    h2: makeNodeComponent("h2"),
    tabs: makeNodeComponent("tabs"),
    footerTopSection: makeNodeComponent("footerTopSection"),
    homeFooterTop: makeNodeComponent("homeFooterTop"),
    footerMain: makeNodeComponent("footerMain"),
    pageMetadataOverride: makeNodeComponent("pageMetadataOverride"),

    // Metadata about props expected for PlasmicPersyaratan
    internalVariantProps: PlasmicPersyaratan__VariantProps,
    internalArgProps: PlasmicPersyaratan__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "persyaratan ",
      description:
        "persyaratan apa saja ingin menjadi distributor atau waralaba uwinfly ",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicPersyaratan;
/* prettier-ignore-end */
