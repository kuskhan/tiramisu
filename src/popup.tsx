import "~style.css"
import "~font.css"

import * as process from "process"
import kpay from "data-base64:~assets/kakao_pay.png"
import { useState } from "react"

import GrayLogoButton from "~components/GrayLogoButton"
import PulseLogoButton from "~components/PulseLogoButton"

function IndexPopup() {
  const [buttonState, setButtonState] = useState(false)
  const [showQR, setShowQR] = useState(false)
  const toggleHandler = () => {
    setButtonState(!buttonState)
  }

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
        <div className="flex flex-row justify-between w-full text-sm items-center">
          <p>kuskhan@gmail.com</p>
          <button
            className="bg-stone-400 px-3 py-1 rounded-xl text-slate-50 shadow-md"
            onClick={() => setShowQR(true)}>
            Buy Me a Tiramisu
          </button>
        </div>
      </div>
      {showQR && (
        <button onClick={() => setShowQR(false)}>
          <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center bg-black bg-opacity-50">
            <img
              src={kpay}
              alt="qr code for kakaopay"
              width="250"
              height="250"
            />
          </div>
        </button>
      )}
    </div>
  )
}

export default IndexPopup
