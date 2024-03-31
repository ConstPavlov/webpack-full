declare module '*module.scss' {
  interface IClassName {
    [className: string]: string;
  }

  const classNames: IClassName;
  export = classNames;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
// declare module '*.svg';

declare module '*.svg' {
  import React from 'react';
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare const __PLATFORM__: 'mobile' | 'desktop';
declare const __ENV__: 'development' | 'production';
