// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WhatsappBusinessSvgrepoComsvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function WhatsappBusinessSvgrepoComsvgIcon(
  props: WhatsappBusinessSvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 192 192"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M60.359 160.867l2.894-5.256a6.003 6.003 0 00-4.284-.581l1.39 5.837zM22 170l-5.837-1.39a6.002 6.002 0 007.227 7.227L22 170zm9.133-38.359l5.837 1.39a6.001 6.001 0 00-.581-4.284l-5.256 2.894zM96 176c44.183 0 80-35.817 80-80h-12c0 37.555-30.445 68-68 68v12zm-38.535-9.877C68.9 172.42 82.04 176 96 176v-12c-11.884 0-23.04-3.043-32.747-8.389l-5.788 10.512zm-34.075 9.714l38.358-9.133-2.78-11.674-38.358 9.133 2.78 11.674zm1.906-45.585l-9.133 38.358 11.674 2.78 9.133-38.359-11.674-2.779zM16 96c0 13.959 3.58 27.1 9.877 38.535l10.512-5.788C31.043 119.039 28 107.884 28 96H16zm80-80c-44.183 0-80 35.817-80 80h12c0-37.555 30.445-68 68-68V16zm80 80c0-44.183-35.817-80-80-80v12c37.555 0 68 30.445 68 68h12z"
        }
      ></path>

      <path
        stroke={"currentColor"}
        strokeLinejoin={"round"}
        strokeWidth={"12"}
        d={
          "M103 130H76V96h27c9.389 0 17 7.611 17 17s-7.611 17-17 17zm-2-34H76V62h25c9.389 0 17 7.611 17 17s-7.611 17-17 17z"
        }
      ></path>
    </svg>
  );
}

export default WhatsappBusinessSvgrepoComsvgIcon;
/* prettier-ignore-end */
