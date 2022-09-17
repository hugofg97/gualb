import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/assets/fonts/Poppins-Regular.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="Poppins"
    />,
  ]);
};
