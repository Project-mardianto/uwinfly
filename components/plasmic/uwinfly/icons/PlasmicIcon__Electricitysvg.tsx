// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ElectricitysvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ElectricitysvgIcon(props: ElectricitysvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.2"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g fillRule={"evenodd"} fill={"currentColor"}>
        <path
          d={
            "M21 5c1.6 0 3 1.4 3 3v19c0 1.6-1.4 3-3 3H11c-1.6 0-3-1.4-3-3V8c0-1.6 1.4-3 3-3zM10 8v19c0 .6.4 1 1 1h10c.6 0 1-.4 1-1V8c0-.6-.4-1-1-1H11c-.6 0-1 .4-1 1z"
          }
        ></path>

        <path
          d={
            "M16.3 10.6q-.2-.1-.4-.1t-.3.1l-.4.2q-.1.2-.1.4l-2 6q-.1.2-.1.5 0 .2.2.4.1.2.3.3.3.1.5.1h2.6l-1.5 4.7q-.1.2-.1.4t.1.3l.2.4q.2.1.4.1.2.1.4.1t.3-.1l.4-.2q.1-.2.1-.4l2-6q.1-.2.1-.5 0-.2-.2-.4-.1-.2-.3-.3-.3-.1-.5-.1h-2.6l1.5-4.7q.1-.2.1-.4t-.1-.3l-.2-.4q-.2-.1-.4-.1zM19 2c1.1 0 2 .9 2 2v1c0 1.1-.9 2-2 2h-6c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2zm-6 3h6V4h-6z"
          }
        ></path>
      </g>
    </svg>
  );
}

export default ElectricitysvgIcon;
/* prettier-ignore-end */
