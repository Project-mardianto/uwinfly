// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Service4SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Service4SvgIcon(props: Service4SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.2"}
      viewBox={"0 0 1000 1000"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <defs>
        <image
          width={"512"}
          height={"512"}
          id={"2_0-yZGNNaEMa"}
          href={
            "data:image/png;base64,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"
          }
        ></image>
      </defs>

      <g opacity={".4"}>
        <path
          d={"M117 469.7H40v115.2h77v4.4h80.4V423.4H117z"}
          fill={"#ff0100"}
        ></path>

        <path d={"M234 478.2v102.4h68V478.2z"} fill={"#e9ddfe"}></path>
      </g>

      <path
        d={
          "M1000 534.7h-44.7v-64.6h5.7V456H850.5v14.1h6.8v64.6h-6.8v14.1h6.8v29.7h-83v-158H654.8v73.7H530.6v27.3h-76.8v96.1H374v-59.9h6.5v-16.3h-105v-196h-19.2v-99.2h-38.6v-95.7h-9.4v95.7h-38.5v99.2h-19.3v232.8H77.6v-55.7H0v172.8l1000-3z"
        }
        fill={"#ff0100"}
      ></path>

      <path
        d={
          "M1000 492.2l-55.7 1v34h-44.5v-142h-11.7v-60.6H881V304h-17v-64.3h-4V304h-16.9v20.6h-7.8v60.6h-11.7v119.5h-64.1v10h4v36.6h-35.2V370h-60.4v105.9h-75.8V431h-72.8v96.4h-50.7v-18.1h4.2v-8.6h-4.2v-39.4h4.2v-8.7h-67.5v8.7h3.5v39.4h-3.5v8.6h3.5v18.1h-40.7v114.7l510.6 16.6 121.3-57.9z"
        }
        opacity={".4"}
        fill={"#ff0100"}
      ></path>

      <path
        d={"M447.3 694l2.1 25.1s-23.3 10.2-23.9 7.1c-.5-3.1-3.8-35-3.8-35z"}
        fill={"#fff3da"}
      ></path>

      <path
        d={
          "M614.4 515.6l-18.6 53.5-167.3 20.1 22.2 112.5-31.3 3.3s-33.9-85.7-49.5-151.2l133.9-47.9z"
        }
        fill={"#798184"}
      ></path>

      <path
        d={
          "M454.5 707.5l-34.8 2.8 2.9 9.6-27.8.4s-26.1 5.3-26.5 27.1l85.5 1.5.3-20.6z"
        }
        fill={"#845630"}
      ></path>

      <path
        d={"M393.5 720c-5.1 1.3-26.5 7.8-26.8 27.4l26.3.4z"}
        fill={"#845630"}
      ></path>

      <path
        d={
          "M453.8 748.9l-85.5-1.5.1-4.7 85.4 1.5zM405 730.2l-4.7-.1.2-10.6 4.7.1zm8.7.1l-4.7-.1.2-10.5h4.7zm8.7.2l-4.8-.1.2-10.6 4.8.1z"
        }
        fill={"#a57450"}
      ></path>

      <path
        d={
          "M610.1 499.2l-106.3 6.7-133.9 47.9c15.6 65.5 49.5 151.2 49.5 151.2l3.7-.4c.2 1.8.4 3.6.6 5.3l-4 .4 2.9 9.6-4.8-.1v.2h-3.9v-.3h-4.7v.4l-4 .1v-.6l-4.7-.1v.7l-5.7.1s-.5.1-1.4.4l.1-.7c-5.1 1.3-26.5 7.8-26.8 27.4h1.6l85.5 1.5v-4.7l.3-15.9.4-20.8-6 .5-.5-6 2.7-.3-22.2-112.5 167.3-20.1z"
        }
        opacity={".3"}
        fill={"#000"}
      ></path>

      <path
        d={
          "M148 858.5c0 11.6 157.3 21 351.3 21 193.9 0 351.2-9.4 351.2-21s-157.3-21-351.2-21c-194 0-351.3 9.4-351.3 21z"
        }
        opacity={".1"}
        fill={"#000"}
      ></path>

      <path
        fillRule={"evenodd"}
        d={
          "M169.7 781.2c0-42.7 34.8-77.5 77.5-77.5 42.8 0 77.6 34.8 77.6 77.5 0 42.8-34.8 77.6-77.6 77.6-42.7 0-77.5-34.8-77.5-77.6zm32.8 0c0 24.7 20.1 44.8 44.7 44.8 24.7 0 44.8-20.1 44.8-44.8 0-24.6-20.1-44.7-44.8-44.7-24.6 0-44.7 20.1-44.7 44.7z"
        }
        fill={"#3f4443"}
      ></path>

      <path
        d={
          "M319.7 781.2c0 33.8-27.4 61.2-61.1 61.2-33.8 0-61.2-27.4-61.2-61.2 0-33.7 27.4-61.1 61.2-61.1 33.7 0 61.1 27.4 61.1 61.1z"
        }
        fill={"#aaa"}
      ></path>

      <path
        fillRule={"evenodd"}
        d={
          "M181 781.2c0-42.7 34.8-77.5 77.6-77.5 42.7 0 77.5 34.8 77.5 77.5 0 42.8-34.8 77.6-77.5 77.6-42.8 0-77.6-34.8-77.6-77.6zm32.8 0c0 24.7 20.1 44.8 44.8 44.8 24.6 0 44.7-20.1 44.7-44.8 0-24.6-20.1-44.7-44.7-44.7-24.7 0-44.8 20.1-44.8 44.7z"
        }
        fill={"#262626"}
      ></path>

      <path
        d={
          "M270.4 781.2c0 9.7-7.8 17.4-17.4 17.4-9.7 0-17.5-7.7-17.5-17.4 0-9.6 7.8-17.4 17.5-17.4 9.6 0 17.4 7.8 17.4 17.4z"
        }
        fill={"#9b9b9b"}
      ></path>

      <path
        fillRule={"evenodd"}
        d={
          "M228.1 781.2c0-13.7 11.1-24.8 24.9-24.8 13.7 0 24.8 11.1 24.8 24.8 0 13.8-11.1 24.9-24.8 24.9-13.8 0-24.9-11.1-24.9-24.9zm14.9 0c0 5.5 4.5 10 10 10 5.4 0 9.9-4.5 9.9-10 0-5.4-4.5-9.9-9.9-9.9-5.5 0-10 4.5-10 9.9z"
        }
        fill={"#c6c6c6"}
      ></path>

      <path
        d={
          "M270.2 704.7l-19 54.7 6.9 6.9 21.9-58.7zm17.3 19l-19 54.6 6.9 6.9 21.9-58.6z"
        }
        fill={"#444c4a"}
      ></path>

      <path
        d={"M244.3 770.9l6.9-21.3 28.8 35.6-11.5 12.7z"}
        fill={"#77827f"}
      ></path>

      <path
        d={
          "M258.6 703.7c-34.1 0-63.1 22.1-73.5 52.7h63.2l30.4 24.8h57.4c0-42.7-34.8-77.5-77.5-77.5z"
        }
        opacity={".2"}
        fill={"#000"}
      ></path>

      <path
        d={
          "M191.8 742.5h60.5l36.1 27.2h60.7c0-57-42.8-103.3-95.6-103.3-37.1 0-69.3 23-85.1 56.4z"
        }
        fill={"#ff0100"}
      ></path>

      <path
        d={
          "M259.7 673.5c25.8 0 49.2 11 66.4 29-17.5-22.1-43.5-36.1-72.6-36.1-37.1 0-69.3 23-85.1 56.4l6.8 5.7c16-32.7 47.8-55 84.5-55z"
        }
        opacity={".6"}
        fill={"#eb0706"}
      ></path>

      <path
        d={
          "M786.2 721.8s-40.4-112.7-125.5-114.1H490.5s57.7 20.2 57.7 73.6c0 53.3-46.2 53.3-73.6 53.3h-65.7s-88.4 8.5-65.8-126.9l30.2-106.8-27.9 12.6-72.7 138 3.2 11.5c41.5 12.1 71.5 50.2 80.5 92.9 22.2 9.4 81.6 10.5 136.9 10.5h304.4s-3.3-27.1-11.5-44.6z"
        }
        fill={"#262626"}
      ></path>

      <path
        fillRule={"evenodd"}
        d={
          "M596.1 781.2c0-42.7 34.8-77.5 77.6-77.5s77.6 34.8 77.6 77.5c0 42.8-34.8 77.6-77.6 77.6s-77.6-34.8-77.6-77.6zm32.8 0c0 24.7 20.1 44.8 44.8 44.8 24.7 0 44.7-20.1 44.7-44.8 0-24.6-20-44.7-44.7-44.7-24.7 0-44.8 20.1-44.8 44.7z"
        }
        fill={"#3f4443"}
      ></path>

      <path
        d={
          "M745.9 783.8c0 32.7-26.5 59.1-59.2 59.1-32.6 0-59.1-26.4-59.1-59.1s26.5-59.1 59.1-59.1c32.7 0 59.2 26.4 59.2 59.1z"
        }
        fill={"#aaa"}
      ></path>

      <path
        fillRule={"evenodd"}
        d={
          "M611.7 783.8c0-41.4 33.7-75 75-75 41.4 0 75.1 33.6 75.1 75s-33.7 75-75.1 75c-41.3 0-75-33.6-75-75zm31.8 0c0 23.9 19.4 43.3 43.2 43.3 23.9 0 43.3-19.4 43.3-43.3s-19.4-43.3-43.3-43.3c-23.8 0-43.2 19.4-43.2 43.3z"
        }
        fill={"#1e1e1e"}
      ></path>

      <path
        d={
          "M703.6 783.8c0 9.3-7.6 16.8-16.9 16.8-9.2 0-16.8-7.5-16.8-16.8s7.6-16.8 16.8-16.8c9.3 0 16.9 7.5 16.9 16.8z"
        }
        fill={"#9b9b9b"}
      ></path>

      <path
        fillRule={"evenodd"}
        d={
          "M662.7 783.8c0-13.3 10.8-24 24-24 13.3 0 24.1 10.7 24.1 24s-10.8 24-24.1 24c-13.2 0-24-10.7-24-24zm14.4 0c0 5.3 4.3 9.6 9.6 9.6s9.7-4.3 9.7-9.6-4.4-9.6-9.7-9.6c-5.3 0-9.6 4.3-9.6 9.6z"
        }
        fill={"#c6c6c6"}
      ></path>

      <path
        d={"M611.7 783.8c0-41.4 33.7-75 75-75 41.4 0 75.1 33.6 75.1 75z"}
        fill={"#000"}
        opacity={".3"}
      ></path>

      <path
        d={
          "M612.1 757.7s-146.1 8.9-203.7-5.8c-57.6-14.6-73.3-62.3-68-124.4 0 118.3 68.5 107.1 68.5 107.1h65.7c27.4 0 73.6 0 73.6-53.3 0-53.4-57.7-73.6-57.7-73.6h170.2c85.1 1.4 125.5 114.1 125.5 114.1 8.2 17.5 11.5 44.6 11.5 44.6H609.5z"
        }
        fill={"#262626"}
      ></path>

      <path
        d={"M710.2 622.1h35.7s37.4 16.4 24.9 34.6c0 0-15.4 11.6-20.2 5.8z"}
        fill={"#ad2217"}
      ></path>

      <path
        d={
          "M734.6 622.1c3 5 23.7 31.6 34 36.1-4.4 3-14.3 8.7-18 4.3l-40.4-40.4z"
        }
        fill={"#383b3a"}
      ></path>

      <path
        d={
          "M605.3 633.6c104.9-22.3 170.4 83.1 170.4 137H580.3c-39.2-49.6-39.3-123.3 25-137z"
        }
        fill={"#ff0100"}
      ></path>

      <path
        d={
          "M603.4 649.5c95.4-20.4 158.2 64.9 168.8 121.1h3.5c0-53.9-65.5-159.3-170.4-137-35.4 7.6-51.2 33.3-51.8 63.2 5.1-22.8 21-41.2 49.9-47.3z"
        }
        opacity={".6"}
        fill={"#de0b0a"}
      ></path>

      <path
        d={
          "M490.5 603.4h95.1c25.5 0 51.6-1.8 77.1.1 81.8 5.8 125.7 90.6 139.2 161.7 1.1 5.5-7.3 7.8-8.3 2.3C781 701.4 739.4 615.1 661 612c-56.7-2.2-113.8 0-170.5 0-5.6 0-5.6-8.6 0-8.6z"
        }
        fill={"#ff0100"}
      ></path>

      <path
        d={
          "M433.1 505.9c-1.1 3.8-5.6 6.2-10 5.3l-53.4-10.9c-4.5-1-7.2-4.8-6.2-8.7 1.1-3.8 5.6-6.2 10.1-5.3l53.3 11c4.5.9 7.3 4.7 6.2 8.6z"
        }
        fill={"#4e4e50"}
      ></path>

      <path
        d={
          "M433.1 505.9c-1.1 3.8-5.6 6.2-10 5.3l-53.4-10.9c-4.5-1-7.2-4.8-6.2-8.7z"
        }
        fill={"#282828"}
      ></path>

      <path
        d={
          "M316.9 487.1c-2.6 15.4 7.7 30.1 23.2 32.7 15.4 2.7 35-6.8 37.6-22.2 2.7-15.5-12.6-31-28-33.7-15.4-2.6-30.1 7.7-32.8 23.2z"
        }
        fill={"#ff0100"}
      ></path>

      <path
        d={
          "M349.7 474.6c12.4 2.1 24.7 12.6 27.6 24.6.2-.6.3-1.1.4-1.6 2.7-15.5-12.6-31-28-33.7-15.4-2.6-30.1 7.7-32.8 23.2-.6 3.4-.5 6.8.1 10.1 2.9-15.1 17.4-25.2 32.7-22.6z"
        }
        fill={"#e80807"}
      ></path>

      <path
        d={
          "M349.7 463.9c-15.4-2.6-30.1 7.7-32.8 23.2-2.6 15.4 7.7 30.1 23.2 32.7z"
        }
        fill={"#3f4442"}
      ></path>

      <path
        d={
          "M336.7 476.9c-4.9 0-9.6-1-14-2.7-2.9 3.6-4.9 8-5.8 12.9-2.6 15.4 7.7 30.1 23.2 32.7l7.5-43.4c-3.5.3-7.1.5-10.9.5z"
        }
        fill={"#262626"}
      ></path>

      <path
        d={
          "M337.4 464.5c-10.3 2.9-18.5 11.4-20.5 22.6-1.9 11.2 3.1 22 11.8 28.1z"
        }
        fill={"#98d8d6"}
      ></path>

      <path
        d={
          "M335.1 478l2.3-13.5c-10.3 2.9-18.5 11.4-20.5 22.6-.6 3.8-.5 7.6.4 11.1 2.2-9.6 9.1-17 17.8-20.2z"
        }
        fill={"#bdf2ef"}
      ></path>

      <path
        d={
          "M381.6 504.1c-.5 2.5-3.3 4.4-6.3 4-2.9-.3-5-2.7-4.5-5.2l2.8-14.6c.4-2.5 3.2-4.4 6.2-4 3 .3 5 2.7 4.5 5.2z"
        }
        fill={"#cc7b1b"}
      ></path>

      <path
        d={
          "M633.2 667.5c0 1.2-.9 2.1-2.1 2.1h-18.8c-1.2 0-2.2-.9-2.2-2.1 0-1.1 1-2.1 2.2-2.1h18.8c1.2 0 2.1 1 2.1 2.1zm0 59.9c0 1.2-.9 2.2-2.1 2.2h-18.8c-1.2 0-2.2-1-2.2-2.2 0-1.1 1-2.1 2.2-2.1h18.8c1.2 0 2.1 1 2.1 2.1zm17.5-50c0 1.2-.9 2.2-2.1 2.2h-51c-1.1 0-2.1-1-2.1-2.2 0-1.1 1-2.1 2.1-2.1h51c1.2 0 2.1 1 2.1 2.1zm5.9 9.9c0 1.2-.9 2.2-2.1 2.2h-62.1c-1.1 0-2.1-1-2.1-2.2 0-1.1 1-2.1 2.1-2.1h62.1c1.2 0 2.1 1 2.1 2.1zm2.1 10.4c0 1.2-.9 2.1-2.1 2.1h-65.9c-1.2 0-2.2-.9-2.2-2.1 0-1.2 1-2.1 2.2-2.1h65.9c1.2 0 2.1.9 2.1 2.1zm-3.9 9.5c0 1.1-.9 2.1-2.1 2.1h-60.3c-1.1 0-2.1-1-2.1-2.1 0-1.2 1-2.2 2.1-2.2h60.3c1.2 0 2.1 1 2.1 2.2zm-6.1 9.9c0 1.1-.9 2.1-2.1 2.1h-49c-1.1 0-2.1-1-2.1-2.1 0-1.2 1-2.2 2.1-2.2h49c1.2 0 2.1 1 2.1 2.2z"
        }
        fill={"#c6c6c6"}
      ></path>

      <path
        d={
          "M460.2 578.8c0 13.6 8 24.6 18 24.6h126.6c9.9 0 18-11 18-24.6 0-13.5-7.6-29-17.5-29l-126.9 17.8c-10 0-18.2-2.3-18.2 11.2z"
        }
        fill={"#272727"}
      ></path>

      <path
        d={
          "M467.1 557.5q-.2 1.8-.2 3.7c0 13.2 8.4 23.8 18.8 23.8h132.6c1 0 1.9-.1 2.7-.2-2.1 10.1-9 17.6-17.2 17.6H477.2c-10 0-18-11-18-24.6 0-8.4 3.1-15.9 7.9-20.3z"
        }
        fill={"#3f4442"}
      ></path>

      <path d={"M774.3 600.5l-64.4 21.6-27.6-16.3z"} fill={"#383b3a"}></path>

      <path
        d={
          "M638.8 600.5c0 3.6 3.1 6.5 7 6.5h162.4c3.9 0 7-2.9 7-6.5 0-3.7-3.1-6.6-7-6.6H645.8c-3.9 0-7 2.9-7 6.6zm169.4-6.6H644.1V476.8h164.1z"
        }
        fill={"#262626"}
      ></path>

      <use
        href={"#2_0-yZGNNaEMa"}
        transform={"matrix(.195 0 0 .195 683.069 485.069)"}
      ></use>

      <path
        d={"M659.8 578.8v-102h-15.7v117.1h164.1v-15.1z"}
        opacity={".7"}
        fill={"#3f4442"}
      ></path>

      <path d={"M815.2 525.2h-7v-24.3h7z"} fill={"#e80807"}></path>

      <path
        d={"M483.3 291.7l23.4 45.3 38.3-24.1-21.1-59.8z"}
        fill={"#e89380"}
      ></path>

      <path
        d={
          "M413.9 240.7s-2.2 13.2-7.4 15.6c-5.2 2.3-2.7 20.4 13.6 12.1 16.2-8.3-6.2-27.7-6.2-27.7z"
        }
        fill={"#ffb9a4"}
      ></path>

      <path
        d={
          "M460.2 153.7c-45.1 15.9-57.8 85.8-35.8 123.7 8.5-2 21.2-6.1 27.9-13.8 0 0-4.4 20.3-17.9 26.4 0 5.1 12.9 17.2 23.3 17.7 56.6 2.7 72-52.1 72-52.1 44.4-62.2 26.7-135.8-69.5-101.9z"
        }
        fill={"#ffb9a4"}
      ></path>

      <path
        d={"M470.8 689.6l4.7 24.8s-22.1 12.6-22.9 9.6c-.9-3-7.5-34.4-7.5-34.4z"}
        fill={"#fff3da"}
      ></path>

      <path
        d={
          "M618.1 494.6l-8 56.4-169 36.5L475 697l-30.8 6.6S401.4 622 379 558.5l128.1-61.8z"
        }
        fill={"#798184"}
      ></path>

      <path
        d={
          "M551.1 288.8l-76.1 34 15.8 17.2-1.9 75.2-73.3 42.1 13.6 28.5 57.6-26.1-.5 43.1s79.4 35.6 135.7-1.4c0 0 17.4-115.7-61.6-193.2-4.1-4.1-4.6-15.6-9.3-19.4z"
        }
        fill={"#ff0100"}
      ></path>

      <path
        d={
          "M551.1 288.8l-76.1 34 15.8 17.2-1.9 75.2-73.3 42.1 13.6 28.5 57.6-26.1-.5 43.1s79.4 35.6 135.7-1.4c0 0 17.4-115.7-61.6-193.2-4.1-4.1-4.6-15.6-9.3-19.4z"
        }
        fill={"#ff0100"}
      ></path>

      <path
        d={
          "M486.3 478.5c4.2 1.3 6.8 1.7 11.5 1.8 43.3.1 89.6-20.4 99.9-66.4 4.8-21.4 2.2-42-5.2-60.8v-1c0-1-.1-1.9-.1-2.9C632.2 412 622 501.4 622 501.4c-56.3 37-135.7 1.4-135.7 1.4z"
        }
        fill={"#de0b0a"}
      ></path>

      <path
        d={
          "M540.2 420.9c8.5-6.2 18.7-64.9 18.7-64.9s-3.6 29.6-3.6 54.7c0 23.1-25.7 31-25.7 31l-100.4 44.1-6.8-14.8c42.3-17.9 103.2-39.4 117.8-50.1z"
        }
        fill={"#de0b0a"}
      ></path>

      <path
        d={
          "M479.4 702.3l-34.3 6.5 3.9 9.3-27.6 3.3s-25.4 8-23.5 29.8l85.1-7.6-1.8-20.5z"
        }
        fill={"#845630"}
      ></path>

      <path
        d={"M420 721.2c-4.9 1.8-25.4 10.5-23.7 30.1l26.2-2.3z"}
        fill={"#845630"}
      ></path>

      <path
        d={
          "M483 743.6l-86.5 7.4-.4-4.7 86.5-7.4zm-50.4-13.5l-4.7.5-.9-10.6 4.7-.4zm8.7-.7l-4.8.4-.9-10.6 4.7-.4zm8.6-.8l-4.7.4-1-10.5 4.8-.4z"
        }
        fill={"#a57450"}
      ></path>

      <path
        d={
          "M429 484.2l-9.2-17.9-23.2 11.6.1.1c-14.9 7.8-16.6 17-12.3 25.3 4.5 8.7 14.1 7.5 22.4 4.6 0 0-8.3-1.1-5.1-5.2 5.2-6.8 11-8.1 11-8.1s9 1.6 11.8-7.3c0 0-.1-.3-.2-.8z"
        }
        fill={"#ffb9a4"}
      ></path>

      <path
        d={
          "M429 484.2l-4.4-8.6-2.8 1.5c.1.7.2 1.1.2 1.1-3.8 13.2-16.4 10.8-16.4 10.8s-5.2.3-12.7 10.2c-3.4 4.4-1 9.9 3.2 10.7 4.2.8 7.4-.9 10.7-2 0 0-2.9-.8-2.5-3.7.9-8 8.4-9.6 8.4-9.6s9 1.6 11.8-7.3c0 0-.1-.3-.2-.8z"
        }
        fill={"#e89380"}
      ></path>

      <path
        d={
          "M536.4 315.1c-2.1.7-4.3 1.3-6.3 2.2-1.1.4-2 .9-3 1.4-1 .5-2 1.1-2.9 1.7-1.9 1.2-3.6 2.6-5.2 4.1-1.5 1.6-3 3.3-4.1 5.2-1.1 1.8-2 3.9-2.6 5.9-.2.5-.3 1.1-.4 1.6l-.2 1.6-.3 3.4-1.4 13.3c-1.9 17.7-4 35.4-6 53.1l-.1.5-.4.3c-14.5 8.2-29.2 16.2-43.7 24.3-14.6 8.1-29.3 16-43.9 24l.2-.6 13.1 28.7-14-28.3-.2-.4.4-.3c14.5-8.2 28.9-16.5 43.5-24.7 14.6-8.1 29.1-16.4 43.7-24.4l-.5.7c2.1-17.7 4.2-35.4 6.4-53.1l1.7-13.3.4-3.3.2-1.6c.1-.7.3-1.2.4-1.8.7-2.2 1.7-4.2 3-6.1 1.2-1.9 2.7-3.6 4.3-5.2 1.7-1.5 3.5-2.9 5.4-4 1-.6 2-1.1 3-1.6s2-1 3.1-1.3c2.1-.9 4.2-1.4 6.4-2z"
        }
        fill={"#cc7b1b"}
      ></path>

      <path
        d={
          "M536.4 315.1c-2.1.7-4.3 1.3-6.3 2.2-1.1.4-2 .9-3 1.4-1 .5-2 1.1-2.9 1.7-1.9 1.2-3.6 2.6-5.2 4.1-1.5 1.6-3 3.3-4.1 5.2-1.1 1.8-2 3.9-2.6 5.9-.2.5-.3 1.1-.4 1.6l-.2 1.6-.3 3.4-1.4 13.3c-1.9 17.7-4 35.4-6 53.1l-.1.5-.4.3c-14.5 8.2-29.2 16.2-43.7 24.3-14.6 8.1-29.3 16-43.9 24l.2-.6 13.1 28.7-14-28.3-.2-.4.4-.3c14.5-8.2 28.9-16.5 43.5-24.7 14.6-8.1 29.1-16.4 43.7-24.4l-.5.7c2.1-17.7 4.2-35.4 6.4-53.1l1.7-13.3.4-3.3.2-1.6c.1-.7.3-1.2.4-1.8.7-2.2 1.7-4.2 3-6.1 1.2-1.9 2.7-3.6 4.3-5.2 1.7-1.5 3.5-2.9 5.4-4 1-.6 2-1.1 3-1.6s2-1 3.1-1.3c2.1-.9 4.2-1.4 6.4-2z"
        }
        fill={"#de0b0a"}
      ></path>

      <path
        d={
          "M408.8 195.5s17.4-76.1 99.3-52.4c78.7 22.6 49.9 113.5 35.5 118.9-14.4 5.3-8.6 2.8-8.6 2.8s-56.2 21.1-70.5-26.7c-15-50.4-55.7-42.6-55.7-42.6z"
        }
        fill={"#ff0100"}
      ></path>

      <path
        d={
          "M408.8 200.5c8.4-.9 17.3 1.6 24.8 5.4 8.3 4.3 14.6 11.2 19.5 19 6.2 10 8.2 21.7 15.3 31.3 19.8 26.8 56.8 16.8 82.5 5.7 5.9-2.5.8-11.1-5.1-8.6-12.7 5.5-26.1 9.8-40 10.1-8.4.1-16.2-2.1-23.1-6.7-9.2-6.3-11.8-17.3-16-26.9-9.8-22.3-32-42.1-57.9-39.3-6.4.6-6.4 10.6 0 10z"
        }
        fill={"#de0b0a"}
      ></path>

      <path
        d={
          "M396.5 215.4s-3.1-34 15.7-48.4c0 0 84.3 22.6 71.2 47.8 0 0-15.8 37.1-86.9.6z"
        }
        fill={"#191919"}
      ></path>

      <path
        d={
          "M430.2 208.3c1.3-11.5 6.6-22.4 14.7-30.6-16.5-6.7-31.7-10.7-31.7-10.7-18.8 14.4-15.7 48.4-15.7 48.4 13.6 7 25.1 11.2 35 13.6-2.2-6.8-3-13.9-2.3-20.7z"
        }
        fill={"#1d1d1d"}
      ></path>

      <path
        d={
          "M409.7 202.1c1.3-11.9 6.8-23 15.3-31.3-7.6-2.4-12.8-3.8-12.8-3.8-18.8 14.4-15.7 48.4-15.7 48.4 5.5 2.8 10.6 5.1 15.4 7.1-2.1-6.8-2.9-13.8-2.2-20.4z"
        }
        fill={"#262626"}
      ></path>

      <path
        d={
          "M457.7 210.4c0 6.3 5 11.3 11.2 11.3 6.2 0 11.3-5 11.3-11.3 0-6.2-5.1-11.2-11.3-11.2-6.2 0-11.2 5-11.2 11.2z"
        }
        fill={"#de0b0a"}
      ></path>

      <path
        d={
          "M455.8 208.5c0 6.2 5 11.2 11.3 11.2 6.2 0 11.2-5 11.2-11.2 0-6.2-5-11.3-11.2-11.3-6.3 0-11.3 5.1-11.3 11.3z"
        }
        fill={"#ff0100"}
      ></path>
    </svg>
  );
}

export default Service4SvgIcon;
/* prettier-ignore-end */
