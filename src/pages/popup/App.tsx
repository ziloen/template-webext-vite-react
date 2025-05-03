import './App.css'

import { openSidePanel } from '~/utils'
import SvgIcon from '~virtual/svg-component'

export function App() {
  return (
    <div className="flex w-max flex-col items-center p-[12px] whitespace-nowrap">
      <div className="">Popup Page</div>

      <div
        className="flex w-max cursor-pointer items-center gap-[4px]"
        onClick={async () => {
          await browser.runtime.openOptionsPage()
          window.close()
        }}
      >
        <SvgIcon name="CarbonLaunch" />
        <span>Open Options Page</span>
      </div>

      <div
        className="flex w-max cursor-pointer items-center gap-[4px]"
        onClick={async () => {
          await openSidePanel()
          window.close()
        }}
      >
        <SvgIcon name="CarbonLaunch" />
        <span>Open Sidepanel</span>
      </div>
    </div>
  )
}
