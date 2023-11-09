import type { FontUrls } from "~lib/types"

export const getStyleText = (url: FontUrls) => {
  return `
    <style>
      @font-face {
        font-family: "Virgil";
        src: url("${url.urlKo}") format("woff2");
        unicode-range: U+1100-11FF, U+AC00-D7A3;
      }
      @font-face {
        font-family: "Virgil";
        src: url("${url.urlJp}") format("woff2");
        unicode-range: U+3040-309F, U+30A0-30FF, U+4E00-9FEA;
      }      
    </style>`
}
