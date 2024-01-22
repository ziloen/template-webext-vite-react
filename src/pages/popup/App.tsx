import { openSidePanel } from '~/utils'
import SvgIcon from '~virtual/svg-component'

export function App() {
  return (
    <div className="p-[12px] text-center whitespace-nowrap">
      <div className="">Popup Page</div>

      <div
        className="flex-align gap-[4px] "
        onClick={() => browser.runtime.openOptionsPage()}
      >
        <SvgIcon name="CarbonLink" />
        <span>Open Options Page</span>
      </div>

      <div className="flex-align gap-[4px]" onClick={openSidePanel}>
        <SvgIcon name="CarbonLink" />
        <span>Open Sidepanel</span>
      </div>
    </div>
  )
}
