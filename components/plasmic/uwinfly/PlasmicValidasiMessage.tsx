// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iWaiTLt8mAup4ReehswsSx
// Component: glQtNY980VYO

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
import Button2 from "../../Button2"; // plasmic-import: bn8Yy5q1VEYE/component
import FooterMain from "../../FooterMain"; // plasmic-import: qoZVCK7paFuV/component
import { PlasmicHead } from "@plasmicapp/react-web";
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import { useScreenVariants as useScreenVariantssppb0UOhrN5L } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: Sppb0uOhrN5l/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: iWaiTLt8mAup4ReehswsSx/projectcss
import sty from "./PlasmicValidasiMessage.module.css"; // plasmic-import: glQtNY980VYO/css

import ProfileCircleSvgrepoCom1SvgIcon from "./icons/PlasmicIcon__ProfileCircleSvgrepoCom1Svg"; // plasmic-import: 0qa3aoynIlk5/icon
import BestSellersvgIcon from "./icons/PlasmicIcon__BestSellersvg"; // plasmic-import: gEr3vmMDIr_A/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: q0SxIWf05NzX/icon
import MotorcyclesvgIcon from "./icons/PlasmicIcon__Motorcyclesvg"; // plasmic-import: bB21gLC1MPi2/icon
import PinsvgIcon from "./icons/PlasmicIcon__Pinsvg"; // plasmic-import: d5Rc8pnBZxlJ/icon
import _2987919AisvgIcon from "./icons/PlasmicIcon___2987919Aisvg"; // plasmic-import: eybPFtSD3Jk4/icon
import Icon4Icon from "./icons/PlasmicIcon__Icon4"; // plasmic-import: Fvg9iqGVtOYx/icon

createPlasmicElementProxy;

export type PlasmicValidasiMessage__VariantMembers = {};
export type PlasmicValidasiMessage__VariantsArgs = {};
type VariantPropType = keyof PlasmicValidasiMessage__VariantsArgs;
export const PlasmicValidasiMessage__VariantProps =
  new Array<VariantPropType>();

export type PlasmicValidasiMessage__ArgsType = {};
type ArgPropType = keyof PlasmicValidasiMessage__ArgsType;
export const PlasmicValidasiMessage__ArgProps = new Array<ArgPropType>();

export type PlasmicValidasiMessage__OverridesType = {
  root?: Flex__<"div">;
  navigationBar?: Flex__<typeof NavigationBar>;
  link1?: Flex__<typeof Link1>;
  link2?: Flex__<typeof Link2>;
  link3?: Flex__<typeof Link3>;
  link4?: Flex__<typeof Link4>;
  link5?: Flex__<typeof Link5>;
  link6?: Flex__<typeof Link6>;
  footerMain?: Flex__<typeof FooterMain>;
  pageMetadataOverride?: Flex__<typeof PlasmicHead>;
};

export interface DefaultValidasiMessageProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicValidasiMessage__RenderFunc(props: {
  variants: PlasmicValidasiMessage__VariantsArgs;
  args: PlasmicValidasiMessage__ArgsType;
  overrides: PlasmicValidasiMessage__OverridesType;
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
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicValidasiMessage.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicValidasiMessage.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicValidasiMessage.pageMetadata.title}
        />
        <meta
          key="description"
          name="description"
          content={PlasmicValidasiMessage.pageMetadata.description}
        />
        <meta
          key="og:description"
          property="og:description"
          content={PlasmicValidasiMessage.pageMetadata.description}
        />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={PlasmicValidasiMessage.pageMetadata.description}
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
            sty.root,
            ``
          )}
        >
          <section className={classNames(projectcss.all, sty.section___5F1Zi)}>
            <NavigationBar
              data-plasmic-name={"navigationBar"}
              data-plasmic-override={overrides.navigationBar}
              brand={
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__iAjsK
                  )}
                  component={Link}
                  href={`/`}
                  platform={"nextjs"}
                >
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__zsgcy)}
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
                  className={classNames(sty.img__gEzVq)}
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
                      sty.link__jDzwA
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
                      sty.link__w8D0M
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
                      sty.link__xp7L4
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
                      sty.link___4WUO
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
                      sty.link__k8WZq
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
                      sty.link__pidfz
                    )}
                    component={Link}
                    href={`/Kontak-kami`}
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
                      sty.link__lH9Jz
                    )}
                    component={Link}
                    href={`/Profile`}
                    platform={"nextjs"}
                  >
                    <ProfileCircleSvgrepoCom1SvgIcon
                      className={classNames(projectcss.all, sty.svg___86WYz)}
                      role={"img"}
                    />
                  </PlasmicLink__>
                </React.Fragment>
              }
              openButton={
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__qyi89)}
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

            <section className={classNames(projectcss.all, sty.section__mPm7U)}>
              <div className={classNames(projectcss.all, sty.columns___3Jbzg)}>
                <div
                  className={classNames(projectcss.all, sty.column__ukiFt)}
                />

                <div
                  className={classNames(projectcss.all, sty.column__wF8Kd)}
                />
              </div>
            </section>
          </section>
          <section className={classNames(projectcss.all, sty.section__jl0Jk)}>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.columns__o9JRa)}
            >
              <div className={classNames(projectcss.all, sty.column___86RPm)}>
                <Button
                  className={classNames("__wab_instance", sty.button___7GYwc)}
                  showStartIcon={true}
                  startIcon={
                    <BestSellersvgIcon
                      className={classNames(projectcss.all, sty.svg__ygFye)}
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
                  sty.column__b1VR0
                )}
                component={Link}
                href={`/Produk`}
                platform={"nextjs"}
              >
                <Button
                  className={classNames("__wab_instance", sty.button___00OXf)}
                  showStartIcon={true}
                  startIcon={
                    <MotorcyclesvgIcon
                      className={classNames(projectcss.all, sty.svg__uvwMm)}
                      role={"img"}
                    />
                  }
                >
                  {"Produk"}
                </Button>
              </PlasmicLink__>
              <div className={classNames(projectcss.all, sty.column__oxqeS)}>
                <Button
                  className={classNames("__wab_instance", sty.button__prmQp)}
                  link={`/Service`}
                  showStartIcon={true}
                  startIcon={
                    <PinsvgIcon
                      className={classNames(projectcss.all, sty.svg__zZupC)}
                      role={"img"}
                    />
                  }
                >
                  {"Service"}
                </Button>
              </div>
            </Stack__>
          </section>
          <section className={classNames(projectcss.all, sty.section__walS)}>
            <div className={classNames(projectcss.all, sty.columns__nAwmk)}>
              <div className={classNames(projectcss.all, sty.column___3XUSc)}>
                <Button
                  className={classNames("__wab_instance", sty.button__qrhJp)}
                  showStartIcon={true}
                >
                  {"Best seller"}
                </Button>
              </div>
              <div className={classNames(projectcss.all, sty.column___3EhmO)}>
                <Button
                  className={classNames("__wab_instance", sty.button___1KmIs)}
                  showStartIcon={true}
                  startIcon={
                    <BestSellersvgIcon
                      className={classNames(projectcss.all, sty.svg__zDpSv)}
                      role={"img"}
                    />
                  }
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__pHzTe
                    )}
                  >
                    {"Best seller"}
                  </div>
                </Button>
              </div>
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.column__yxJqk
                )}
                component={Link}
                href={`/Produk`}
                platform={"nextjs"}
              >
                <Button
                  className={classNames("__wab_instance", sty.button__cFRvc)}
                  showStartIcon={true}
                  startIcon={
                    <MotorcyclesvgIcon
                      className={classNames(projectcss.all, sty.svg__m7Psi)}
                      role={"img"}
                    />
                  }
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__vr9N0
                    )}
                  >
                    {"Produk"}
                  </div>
                </Button>
              </PlasmicLink__>
              <div className={classNames(projectcss.all, sty.column__lrlZ)}>
                <Button
                  className={classNames("__wab_instance", sty.button__fzn6L)}
                  link={`/Service`}
                  showStartIcon={true}
                  startIcon={
                    <PinsvgIcon
                      className={classNames(projectcss.all, sty.svg__fiMix)}
                      role={"img"}
                    />
                  }
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__zVYy2
                    )}
                  >
                    {"Service"}
                  </div>
                </Button>
              </div>
            </div>
          </section>
          <section className={classNames(projectcss.all, sty.section__z8Kqt)}>
            <_2987919AisvgIcon
              className={classNames(projectcss.all, sty.svg__czSuH)}
              role={"img"}
            />
          </section>
          <section className={classNames(projectcss.all, sty.section__aUpn3)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__e4Nmf
              )}
            >
              {"Terima kasih!"}
            </div>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__aJdcu
              )}
            >
              {
                " Telah menghubungi kami mohon menunggu 1x24 jam Admin kami akan membalas anda."
              }
            </div>
            {(hasVariant(globalVariants, "screen", "mobile") ? true : false) ? (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ctJFv
                )}
              >
                {
                  " Telah menghubungi kami mohon menunggu 1x24 jam Admin kami akan membalas anda."
                }
              </div>
            ) : null}
          </section>
          <section className={classNames(projectcss.all, sty.section__xj9CM)}>
            <Button2
              className={classNames("__wab_instance", sty.button2__vpXbk)}
              link={`/`}
            >
              {"Balik Menu"}
            </Button2>
          </section>
          <FooterMain
            data-plasmic-name={"footerMain"}
            data-plasmic-override={overrides.footerMain}
            className={classNames("__wab_instance", sty.footerMain)}
          />

          <section className={classNames(projectcss.all, sty.section__aeA9I)}>
            <div className={classNames(projectcss.all, sty.columns__xaUVj)}>
              <div className={classNames(projectcss.all, sty.column___1GKfZ)}>
                <div className={classNames(projectcss.all, sty.columns__zmlb3)}>
                  <div
                    className={classNames(projectcss.all, sty.column__z0AGy)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___6ZeLk
                      )}
                    >
                      {"Pembayaran :"}
                    </div>
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.column__qV252)}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img__edu4S)}
                      displayHeight={"80px"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"auto"}
                      loading={"lazy"}
                      src={{
                        src: "/plasmic/uwinfly/images/_1646110410MandiriVapng.png",
                        fullWidth: 257,
                        fullHeight: 225,
                        aspectRatio: undefined
                      }}
                    />
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.column__tGbgQ)}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img___16INj)}
                      displayHeight={"62px"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"auto"}
                      loading={"lazy"}
                      src={{
                        src: "/plasmic/uwinfly/images/bcApng.png",
                        fullWidth: 257,
                        fullHeight: 225,
                        aspectRatio: undefined
                      }}
                    />
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.column__w7Nqb)}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img__spxJa)}
                      displayHeight={"66px"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"auto"}
                      loading={"lazy"}
                      src={{
                        src: "/plasmic/uwinfly/images/download1Png.png",
                        fullWidth: 257,
                        fullHeight: 225,
                        aspectRatio: undefined
                      }}
                    />
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.column__eECeu)}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img___7J6Wu)}
                      displayHeight={"80px"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"auto"}
                      loading={"lazy"}
                      src={{
                        src: "/plasmic/uwinfly/images/downloadpng.png",
                        fullWidth: 225,
                        fullHeight: 225,
                        aspectRatio: undefined
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Button2 className={classNames("__wab_instance", sty.button2__w46)} />

          <section className={classNames(projectcss.all, sty.section__bS5N2)}>
            <Button2
              className={classNames("__wab_instance", sty.button2__ctWr7)}
              link={`/`}
            >
              {"Balik Menu"}
            </Button2>
          </section>
          <PlasmicHead
            data-plasmic-name={"pageMetadataOverride"}
            data-plasmic-override={overrides.pageMetadataOverride}
            canonical={"https://uwinfly.co.id/validasi-message"}
            className={classNames("__wab_instance", sty.pageMetadataOverride)}
            description={
              "membantu customer uwinfly indonesia mengenai sepeda listrik dan motor listrik"
            }
            image={"/plasmic/uwinfly/images/logopng.png"}
            title={"validasi-message"}
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
  footerMain: typeof FooterMain;
  pageMetadataOverride: typeof PlasmicHead;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicValidasiMessage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicValidasiMessage__VariantsArgs;
    args?: PlasmicValidasiMessage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicValidasiMessage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicValidasiMessage__ArgsType,
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
          internalArgPropNames: PlasmicValidasiMessage__ArgProps,
          internalVariantPropNames: PlasmicValidasiMessage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicValidasiMessage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicValidasiMessage";
  } else {
    func.displayName = `PlasmicValidasiMessage.${nodeName}`;
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

export const PlasmicValidasiMessage = Object.assign(
  // Top-level PlasmicValidasiMessage renders the root element
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
    footerMain: makeNodeComponent("footerMain"),
    pageMetadataOverride: makeNodeComponent("pageMetadataOverride"),

    // Metadata about props expected for PlasmicValidasiMessage
    internalVariantProps: PlasmicValidasiMessage__VariantProps,
    internalArgProps: PlasmicValidasiMessage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "validasi-message",
      description:
        "membantu customer uwinfly indonesia mengenai sepeda listrik dan motor listrik\n",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicValidasiMessage;
/* prettier-ignore-end */
