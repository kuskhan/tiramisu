import type { FontUrls } from "~lib/types"

export const getStyleText = (url: FontUrls) => {
  return `
    <style>
      @font-face {
        font-family: "Virgil";
        src: url("${url.urlKo}");
        unicode-range: U+1100-11FF, U+AC00-D7A3;
        format("woff2");
      }
      @font-face {
        font-family: "Virgil";
        src: url("${url.urlJp}");
        unicode-range: U+3040-309F, U+30A0-30FF, U+4E00-9FEA;
        format("woff2");
      }      
    </style>`
}
