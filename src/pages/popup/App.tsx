export function App() {
  return (
    <div className="p-[12px] text-center whitespace-nowrap">
      <div className="">Popup Page</div>

      <button className="bg-black" onClick={() => browser.runtime.openOptionsPage()}>
        Open Options Page
      </button>
    </div>
  )
}
