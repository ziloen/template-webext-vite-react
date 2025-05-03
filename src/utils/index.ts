import type { Events } from 'webextension-polyfill'

export async function openSidePanel() {
  const window = await browser.windows.getCurrent()
  const windowId = window.id
  if (!windowId) throw new Error('Window id is not found')
  if (!browser.sidePanel) throw new Error('Side panel is not supported')

  return browser.sidePanel.open({
    windowId: windowId,
  })
}

export function listenEvent<T extends Events.Event<(...args: any[]) => any>>(
  target: T,
  callback: T extends Events.Event<infer U> ? U : never,
) {
  target.addListener(callback)
  return () => target.removeListener(callback)
}
