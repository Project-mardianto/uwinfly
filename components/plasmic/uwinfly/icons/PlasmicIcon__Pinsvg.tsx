// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PinsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PinsvgIcon(props: PinsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 294.91 294.91"}
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
          "M146.02 295.49c-5.43-1.63-8.9-5.46-11.93-10.07-24.02-36.54-48.16-73-72.22-109.52-10.3-15.64-17.56-32.57-20.88-51.07-1.91-10.64-1.64-21.31 0-31.97 1.76-11.4 5.35-22.2 10.6-32.46 7.13-13.92 16.84-25.75 29.04-35.49 13.75-10.99 29.3-18.25 46.57-21.64C140.05.75 152.95.55 165.93 2.7c22.58 3.73 42.01 13.66 58.34 29.53 16.28 15.83 26.57 35.12 30.89 57.39 5.33 27.45-1.14 52.85-14.66 76.73-9.48 16.75-20.83 32.32-31.35 48.42-15.54 23.79-31.31 47.43-46.88 71.2-2.93 4.47-6.44 7.98-11.66 9.52h-4.59zM52.34 110.64c.14 3.3.56 7.77 1.33 12.19 2.95 16.8 9.7 32.09 18.99 46.25 24.32 37.04 48.79 73.97 73.21 110.94 2.36 3.57 2.57 3.54 4.91-.02 19.48-29.54 39.02-59.04 58.45-88.62 8.6-13.1 17.9-25.78 24.58-40.06 9.62-20.58 13.3-41.85 7.63-64.27-5.32-21.03-16.31-38.51-33.26-51.94-21.31-16.89-45.68-23.57-72.69-20.16-18.19 2.3-34.47 9.43-48.39 21.25-22.52 19.1-33.95 43.71-34.76 74.44z"
        }
      ></path>

      <path
        d={
          "M148.39 167.34c-31.72.05-57.46-25.63-57.59-57.26-.13-31.77 25.57-57.7 57.4-57.73 32.54-.04 57.9 26.64 57.66 58.14-.24 30.68-25.68 57.06-57.47 56.85zm-.06-12.69c24.37.12 44.83-20.29 44.82-44.69-.01-24.56-19.9-44.87-44.65-44.82-24.93.05-44.93 19.3-44.86 44.82.05 26.09 20.89 44.57 44.69 44.69z"
        }
      ></path>
    </svg>
  );
}

export default PinsvgIcon;
/* prettier-ignore-end */
