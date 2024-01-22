export async function openSidePanel() {
  const window = await browser.windows.getCurrent()
  const windowId = window.id
  if (!windowId) throw new Error('Window id is not found')
  if (!browser.sidePanel) throw new Error('Side panel is not supported')

  return browser.sidePanel.open({
    windowId: windowId,
  })
}
