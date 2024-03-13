// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowOpenRightSvgrepoComsvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function ArrowOpenRightSvgrepoComsvgIcon(
  props: ArrowOpenRightSvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 1920 1920"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M568.13.012L392 176.142l783.864 783.989L392 1743.87 568.13 1920l960.118-959.87z"
        }
        fillRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default ArrowOpenRightSvgrepoComsvgIcon;
/* prettier-ignore-end */
