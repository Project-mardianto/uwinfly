// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MotorcycleBikeSvgrepoComsvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function MotorcycleBikeSvgrepoComsvgIcon(
  props: MotorcycleBikeSvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      version={"1.1"}
      viewBox={"0 0 512 512"}
      xmlSpace={"preserve"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M422.957 66.783h-85.158C330.042 28.725 296.313 0 256 0s-74.042 28.725-81.799 66.783H89.044c-9.22 0-16.696 7.475-16.696 16.696s7.475 16.696 16.696 16.696h85.158c3.595 17.642 12.773 33.278 25.6 44.977-17.948 7.514-34.419 18.557-48.539 32.768-28.16 28.34-43.668 65.953-43.668 105.907v120.546c0 22.522 18.323 40.845 40.845 40.845h57.473v16.696C205.913 489.531 228.382 512 256 512c27.618 0 50.087-22.469 50.087-50.087v-16.696h59.329c22.522 0 40.845-18.323 40.845-40.845V283.826c0-39.954-15.509-77.567-43.669-105.907-14.46-14.552-31.388-25.776-49.84-33.296 12.533-11.641 21.504-27.067 25.047-44.449h85.158c9.22 0 16.696-7.475 16.696-16.696s-7.476-16.695-16.696-16.695zM256 33.391c27.618 0 50.087 22.469 50.087 50.087 0 27.618-22.469 50.087-50.087 50.087-27.618 0-50.087-22.469-50.087-50.087 0-27.618 22.469-50.087 50.087-50.087zm16.696 428.522c0 9.206-7.49 16.696-16.696 16.696s-16.696-7.49-16.696-16.696V395.13c0-9.206 7.49-16.696 16.696-16.696s16.696 7.49 16.696 16.696v66.783zM372.87 283.826v120.546c0 4.109-3.344 7.454-7.454 7.454h-59.329V395.13c0-27.618-22.469-50.087-50.087-50.087-27.618 0-50.087 22.469-50.087 50.087v16.696H148.44c-4.11 0-7.454-3.344-7.454-7.454V283.826c0-63.967 52.003-116.368 115.942-116.865 63.939.497 115.942 52.898 115.942 116.865z"
        }
      ></path>
    </svg>
  );
}

export default MotorcycleBikeSvgrepoComsvgIcon;
/* prettier-ignore-end */
