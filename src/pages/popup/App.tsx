import './App.css'

import { openSidePanel } from '~/utils'
import SvgIcon from '~virtual/svg-component'

export function App() {
  return (
    <div className="p-[12px] flex-column items-center w-max whitespace-nowrap">
      <div className="">Popup Page</div>

      <div
        className="flex-align gap-[4px] w-max cursor-pointer"
        onClick={async () => {
          await browser.runtime.openOptionsPage()
          window.close()
        }}
      >
        <SvgIcon name="CarbonLaunch" />
        <span>Open Options Page</span>
      </div>

      <div
        className="flex-align gap-[4px] w-max cursor-pointer"
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
