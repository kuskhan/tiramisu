import "~style.css"
import "~font.css"

import coffeeBtnImg from "data-base64:~assets/coffee_btn.png"
import { useEffect, useState } from "react"

import GrayLogoButton from "~components/GrayLogoButton"
import PulseLogoButton from "~components/PulseLogoButton"
import { BUY_ME_A_COFFEE_URL } from "~lib/globalVars"

function IndexPopup() {
  const [buttonState, setButtonState] = useState(false)
  // const [showQR, setShowQR] = useState(false)
  const toggleHandler = async () => {
    setButtonState(!buttonState)
    await chrome.storage.local.set({ switch: !buttonState })
    const [tab] = await chrome.tabs.query({
      active: true,
      lastFocusedWindow: true
    })
    await chrome.tabs.sendMessage(tab.id, { message: "refresh" })
  }

  useEffect(() => {
    chrome.storage.local.get(["switch"]).then((result) => {
      setButtonState(result.switch)
    })
  }, [])

  const manifestData = chrome.runtime.getManifest()
  return (
    <div
      className="w-80 h-72 p-4 bg-stone-200 text-stone-900"
      style={{ fontFamily: "Virgil" }}>
      <div className="flex flex-col h-full justify-between">
        <div>
          <div className="flex flex-row items-end justify-between w-full">
            <p className="text-2xl mx-1">Tiramisu</p>
            <p className="pb-1 mr-1">{`v ${manifestData.version}`}</p>
          </div>
          <div className="w-full h-1 bg-stone-400"></div>
          <p className="text-sm mt-2">
            Chrome extension for supporting Korean and Japanese fonts to
            Excalidraw
          </p>
        </div>
        <div className="">
          {buttonState ? (
            <PulseLogoButton onClick={toggleHandler} />
          ) : (
            <GrayLogoButton onClick={toggleHandler} />
          )}
        </div>
        <div className="flex flex-row justify-between w-full text-xs items-center">
          <p>kuskhan@gmail.com</p>

          <button
            className="bg-stone-400 px-4 py-1 rounded-xl text-slate-50 text-xs"
            onClick={() =>
              window.open(BUY_ME_A_COFFEE_URL, "_blank", "noopener,noreferrer")
            }>
            <img src={coffeeBtnImg} alt="Buy me a Tiramisu" width="130px" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default IndexPopup
