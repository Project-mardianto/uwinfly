// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iWaiTLt8mAup4ReehswsSx
// Component: KZYHfceFhohx

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
import FooterMain from "../../FooterMain"; // plasmic-import: qoZVCK7paFuV/component

import { useScreenVariants as useScreenVariantssppb0UOhrN5L } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: Sppb0uOhrN5l/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: iWaiTLt8mAup4ReehswsSx/projectcss
import sty from "./PlasmicBlog.module.css"; // plasmic-import: KZYHfceFhohx/css

import ProfileCircleSvgrepoCom1SvgIcon from "./icons/PlasmicIcon__ProfileCircleSvgrepoCom1Svg"; // plasmic-import: 0qa3aoynIlk5/icon
import BestSellersvgIcon from "./icons/PlasmicIcon__BestSellersvg"; // plasmic-import: gEr3vmMDIr_A/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: q0SxIWf05NzX/icon
import MotorcyclesvgIcon from "./icons/PlasmicIcon__Motorcyclesvg"; // plasmic-import: bB21gLC1MPi2/icon
import PinsvgIcon from "./icons/PlasmicIcon__Pinsvg"; // plasmic-import: d5Rc8pnBZxlJ/icon

createPlasmicElementProxy;

export type PlasmicBlog__VariantMembers = {};
export type PlasmicBlog__VariantsArgs = {};
type VariantPropType = keyof PlasmicBlog__VariantsArgs;
export const PlasmicBlog__VariantProps = new Array<VariantPropType>();

export type PlasmicBlog__ArgsType = {};
type ArgPropType = keyof PlasmicBlog__ArgsType;
export const PlasmicBlog__ArgProps = new Array<ArgPropType>();

export type PlasmicBlog__OverridesType = {
  root?: Flex__<"div">;
  navigationBar?: Flex__<typeof NavigationBar>;
  link1?: Flex__<typeof Link1>;
  link2?: Flex__<typeof Link2>;
  link3?: Flex__<typeof Link3>;
  link4?: Flex__<typeof Link4>;
  link5?: Flex__<typeof Link5>;
  link6?: Flex__<typeof Link6>;
  footerMain?: Flex__<typeof FooterMain>;
};

export interface DefaultBlogProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicBlog__RenderFunc(props: {
  variants: PlasmicBlog__VariantsArgs;
  args: PlasmicBlog__ArgsType;
  overrides: PlasmicBlog__OverridesType;
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
        <title key="title">{PlasmicBlog.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicBlog.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicBlog.pageMetadata.title}
        />
        <meta
          key="description"
          name="description"
          content={PlasmicBlog.pageMetadata.description}
        />
        <meta
          key="og:description"
          property="og:description"
          content={PlasmicBlog.pageMetadata.description}
        />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={PlasmicBlog.pageMetadata.description}
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
          <section className={classNames(projectcss.all, sty.section__qxZu7)}>
            <NavigationBar
              data-plasmic-name={"navigationBar"}
              data-plasmic-override={overrides.navigationBar}
              brand={
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__cte7F
                  )}
                  component={Link}
                  href={`/`}
                  platform={"nextjs"}
                >
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img___0IUr4)}
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
                  className={classNames(sty.img__tmOtw)}
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
                hasVariant(globalVariants, "screen", "mobile") ? true : true
              }
              itemsGap={hasVariant(globalVariants, "screen", "mobile") ? 8 : 8}
              menuItems={
                <React.Fragment>
                  <PlasmicLink__
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link__vusp
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
                      sty.link__piK8I
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
                      sty.link__wYSoH
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
                      sty.link__bFLdA
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
                      sty.link__jOlNy
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
                      sty.link__efZgb
                    )}
                    component={Link}
                    href={`/Kotak-kami`}
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
                      sty.link__cBbKu
                    )}
                    component={Link}
                    href={`/Profile`}
                    platform={"nextjs"}
                  >
                    <ProfileCircleSvgrepoCom1SvgIcon
                      className={classNames(projectcss.all, sty.svg__a7D4X)}
                      role={"img"}
                    />
                  </PlasmicLink__>
                </React.Fragment>
              }
              openButton={
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__kRb2C)}
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

            <section className={classNames(projectcss.all, sty.section__i320Y)}>
              <div className={classNames(projectcss.all, sty.columns__pNbTc)}>
                <div
                  className={classNames(projectcss.all, sty.column__fIs6M)}
                />

                <div
                  className={classNames(projectcss.all, sty.column___3Dk02)}
                />
              </div>
            </section>
          </section>
          <section className={classNames(projectcss.all, sty.section__duuzI)}>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.columns__vrUl)}
            >
              <div className={classNames(projectcss.all, sty.column__iOfc1)}>
                <Button
                  className={classNames("__wab_instance", sty.button___6Rlap)}
                  showStartIcon={true}
                  startIcon={
                    <BestSellersvgIcon
                      className={classNames(projectcss.all, sty.svg__xEoZ)}
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
                  sty.column__n6CGs
                )}
                component={Link}
                href={`/Produk`}
                platform={"nextjs"}
              >
                <Button
                  className={classNames("__wab_instance", sty.button__fRqxb)}
                  showStartIcon={true}
                  startIcon={
                    <MotorcyclesvgIcon
                      className={classNames(projectcss.all, sty.svg__fYVk)}
                      role={"img"}
                    />
                  }
                >
                  {"Produk"}
                </Button>
              </PlasmicLink__>
              <div className={classNames(projectcss.all, sty.column__je27F)}>
                <Button
                  className={classNames("__wab_instance", sty.button__vAse0)}
                  showStartIcon={true}
                  startIcon={
                    <PinsvgIcon
                      className={classNames(projectcss.all, sty.svg__hFCd7)}
                      role={"img"}
                    />
                  }
                >
                  {"Lokasi"}
                </Button>
              </div>
            </Stack__>
          </section>
          <section className={classNames(projectcss.all, sty.section__r0Ylq)}>
            <div className={classNames(projectcss.all, sty.columns__iPl0M)}>
              <div className={classNames(projectcss.all, sty.column__wdvwp)}>
                <Button
                  className={classNames("__wab_instance", sty.button__seuJ2)}
                  showStartIcon={true}
                >
                  {"Best seller"}
                </Button>
              </div>
              <div className={classNames(projectcss.all, sty.column__kjpT)}>
                <Button
                  className={classNames("__wab_instance", sty.button__ttdm5)}
                  showStartIcon={true}
                  startIcon={
                    <BestSellersvgIcon
                      className={classNames(projectcss.all, sty.svg__zFfWa)}
                      role={"img"}
                    />
                  }
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__j48T
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
                  sty.column___3CRt0
                )}
                component={Link}
                href={`/Produk`}
                platform={"nextjs"}
              >
                <Button
                  className={classNames("__wab_instance", sty.button__vX0Q)}
                  showStartIcon={true}
                  startIcon={
                    <MotorcyclesvgIcon
                      className={classNames(projectcss.all, sty.svg__fZQzt)}
                      role={"img"}
                    />
                  }
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__etuY
                    )}
                  >
                    {"Produk"}
                  </div>
                </Button>
              </PlasmicLink__>
              <div className={classNames(projectcss.all, sty.column__cMkok)}>
                <Button
                  className={classNames("__wab_instance", sty.button__kxVwC)}
                  showStartIcon={true}
                  startIcon={
                    <PinsvgIcon
                      className={classNames(projectcss.all, sty.svg__j2AH)}
                      role={"img"}
                    />
                  }
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__s5V3D
                    )}
                  >
                    {"Lokasi"}
                  </div>
                </Button>
              </div>
            </div>
          </section>
          <section className={classNames(projectcss.all, sty.section__obmi)}>
            <div className={classNames(projectcss.all, sty.columns___7F4E)}>
              <div className={classNames(projectcss.all, sty.column__hJox3)}>
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__wGxPf)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/uwinfly/images/newProject2Png.png",
                    fullWidth: 800,
                    fullHeight: 600,
                    aspectRatio: undefined
                  }}
                />
              </div>
              <div className={classNames(projectcss.all, sty.column__wMi2X)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__ms9Bs
                  )}
                >
                  {"Enter some text"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__vHe
                  )}
                >
                  {"Enter some text"}
                </div>
              </div>
            </div>
          </section>
          {(hasVariant(globalVariants, "screen", "mobile") ? true : false) ? (
            <section className={classNames(projectcss.all, sty.section__qefS)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__p4K8V
                )}
              >
                {"Tentang kami"}
              </div>
            </section>
          ) : null}
          <section className={classNames(projectcss.all, sty.section__ncUx)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__q5Spa
              )}
            >
              {
                "Uwinfly adalah Perusahaan Industrial yang bergerak dalam bidang usaha kendaraan listrik. Dimulai dengan set-up pabrik untuk memulai proses produksi di Tahun 2018. UWinfly mulai memproduksi dan menjualkan produk seperti Sepeda Listrik dan Motor Listrik di Tahun 2019. Dengan Hasil total penjualan sebanyak 5000 Unit di tahun 2019."
              }
            </div>
          </section>
          <FooterMain
            data-plasmic-name={"footerMain"}
            data-plasmic-override={overrides.footerMain}
            className={classNames("__wab_instance", sty.footerMain)}
          />

          <section className={classNames(projectcss.all, sty.section__c5Ap)}>
            <div className={classNames(projectcss.all, sty.columns__j4JlS)}>
              <div className={classNames(projectcss.all, sty.column__yfMOa)}>
                <div className={classNames(projectcss.all, sty.columns__ps8D8)}>
                  <div
                    className={classNames(projectcss.all, sty.column__y39S9)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__bFq7
                      )}
                    >
                      {"Pembayaran :"}
                    </div>
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.column___2QxTa)}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img__jdWuc)}
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
                  <div className={classNames(projectcss.all, sty.column__lMOr)}>
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img__f7Yu)}
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
                    className={classNames(projectcss.all, sty.column__veUtm)}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img__aDode)}
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
                    className={classNames(projectcss.all, sty.column___70AwO)}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img__yw5GU)}
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
    "footerMain"
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
  footerMain: ["footerMain"]
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
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBlog__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBlog__VariantsArgs;
    args?: PlasmicBlog__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBlog__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicBlog__ArgsType,
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
          internalArgPropNames: PlasmicBlog__ArgProps,
          internalVariantPropNames: PlasmicBlog__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicBlog__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBlog";
  } else {
    func.displayName = `PlasmicBlog.${nodeName}`;
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

export const PlasmicBlog = Object.assign(
  // Top-level PlasmicBlog renders the root element
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

    // Metadata about props expected for PlasmicBlog
    internalVariantProps: PlasmicBlog__VariantProps,
    internalArgProps: PlasmicBlog__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "blog ",
      description: "informasi  sepeda listrik dan motor listrik \n",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicBlog;
/* prettier-ignore-end */
