// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Home8SvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Home8SvgrepoComsvgIcon(props: Home8SvgrepoComsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 -0.5 25 25"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        clipRule={"evenodd"}
        d={
          "M6.643 7.742l4.935-2.519a2.02 2.02 0 011.845 0l4.935 2.519a2.33 2.33 0 011.112 2.252L19.5 15a4 4 0 01-4 4h-6a4 4 0 01-4-4l.031-5a2.331 2.331 0 011.112-2.258z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M10.168 19v-2.334a2.334 2.334 0 014.668 0V19"}
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Home8SvgrepoComsvgIcon;
/* prettier-ignore-end */
