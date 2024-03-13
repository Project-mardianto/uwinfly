// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowLeftSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowLeftSvgrepoComsvgIcon(
  props: ArrowLeftSvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M7.685 7.332A1 1 0 106.27 5.918l-4.666 4.665a2 2 0 000 2.829l4.668 4.668a1 1 0 001.415-1.414L4.022 13H22a1 1 0 100-2H4.017l3.668-3.668z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowLeftSvgrepoComsvgIcon;
/* prettier-ignore-end */
