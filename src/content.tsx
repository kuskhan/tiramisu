import cssText from "data-text:~style.css"
import type { PlasmoCSConfig } from "plasmo"
import { useEffect } from "react"

import { getStyleText } from "~lib/styleLib"

export const config: PlasmoCSConfig = {
  matches: ["https://excalidraw.com/*"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const PlasmoOverlay = () => {
  useEffect(() => {
    const fontUrlKo = chrome.runtime.getURL("fonts/nanum-pretty-mk.ttf")
    const fontUrlJp = chrome.runtime.getURL("fonts/KazuFont.ttf")
    document.head.insertAdjacentHTML(
      "beforeend",
      getStyleText({ urlKo: fontUrlKo, urlJp: fontUrlJp })
    )
  }, [])
  return <></>
}

export default PlasmoOverlay
