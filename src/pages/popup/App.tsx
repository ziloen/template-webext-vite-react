import './App.css'

import { openSidePanel } from '~/utils'
import SvgIcon from '~virtual/svg-component'

export function App() {
  return (
    <div className="flex-column w-max items-center whitespace-nowrap p-[12px]">
      <div className="">Popup Page</div>

      <div
        className="w-max cursor-pointer gap-[4px] flex-align"
        onClick={async () => {
          await browser.runtime.openOptionsPage()
          window.close()
        }}
      >
        <SvgIcon name="CarbonLaunch" />
        <span>Open Options Page</span>
      </div>

      <div
        className="w-max cursor-pointer gap-[4px] flex-align"
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
