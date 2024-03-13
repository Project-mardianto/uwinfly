// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icons8Close4SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icons8Close4SvgIcon(props: Icons8Close4SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 44 45.4"}
      xmlSpace={"preserve"}
      height={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M20 8.8h10.1c1.4 0 2.8.2 4.1 1 1.7 1.1 2.7 2.7 2.9 4.7.3 2.7.1 5.4.1 8v6.8c0 1.8-.3 3.6-1.6 5-1.4 1.7-3.4 2.2-5.4 2.2h-7.3c-.4 0-.7.1-1 .3-2.7 2-5.3 3.9-8 5.9-.9.6-1.8 1-2.8.4-1-.6-1.4-1.4-1.4-2.6v-3.6c0-.4-.1-.5-.5-.5-2.8-.3-4.9-1.5-5.9-4.2-.3-.8-.5-1.7-.5-2.6V15.4c0-3.1 1.8-5.5 4.6-6.3.9-.2 1.7-.3 2.6-.3h10zm.1 3H9.3c-2.1 0-3.5 1.5-3.5 3.5V30c0 1.7 1.1 3 2.7 3.4.7.2 1.4.1 2.1.1 1.5 0 2.1.6 2.1 2.1v3.8c0 .2-.1.4.1.5.2.1.3-.1.5-.2 2.5-1.9 5.1-3.7 7.6-5.6.5-.4 1.1-.6 1.8-.6h8.1c2.1 0 3.5-1.3 3.5-3.5.1-4.9 0-9.8 0-14.7 0-2.1-1.5-3.6-3.6-3.6-3.6.1-7.1.1-10.6.1z"
        }
      ></path>

      <path
        d={
          "M39.2 30.5V14.4c0-2-.6-3.8-2-5.3-1.5-1.6-3.4-2.3-5.4-2.3-7.3-.1-14.7 0-22 0h-.9c.9-1.3 1.9-2.1 3.2-2.6.8-.3 1.6-.4 2.5-.4h17.1c5.3 0 8.9 3.4 10.2 7.9.3 1 .3 2 .3 2.9v10.2c0 2.3-.8 4.1-2.6 5.5-.2.1-.3.1-.4.2z"
        }
      ></path>
    </svg>
  );
}

export default Icons8Close4SvgIcon;
/* prettier-ignore-end */
