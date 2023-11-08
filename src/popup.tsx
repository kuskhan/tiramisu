import "~style.css"

import { useEffect } from "react"

async function getCurrentTab() {
  const queryOptions = { active: true, currentWindow: true }
  const [tab] = await chrome.tabs.query(queryOptions)
  return tab
}

function changeFont(url: string) {
  let style = `<style>
@font-face {
font-family: "Virgil";
src:
url("${url}")
format("woff2");
}
</style>`

  document.head.insertAdjacentHTML("beforeend", style)
}

function IndexPopup() {
  useEffect(() => {
    const injectScript = async () => {
      const tab = await getCurrentTab()
      const url = chrome.runtime.getURL("fonts/nanum-pretty-mk.ttf")
      await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: changeFont,
        args: [url]
      })

      return tab.id
    }
    injectScript().then((data) => {
      console.log("Injected:", data)
    })
  }, [])
  return (
    // <div className="plasmo-flex plasmo-items-center plasmo-justify-center plasmo-h-16 plasmo-w-40">
    //   <CountButton />
    // </div>
    <div className="w-80 h-48">
      <p className="text-2xl">Tiramisu</p>
    </div>
  )
}

export default IndexPopup
