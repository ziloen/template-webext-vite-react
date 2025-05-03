if (browser.devtools && browser.devtools.panels) {
  browser.devtools.panels.create(
    'My Panel',
    '',
    'src/pages/devtool-panels/index.html',
  )
}
