import React from "react"
import ReactDOM from "react-dom"

import GlobalStyle from "./GlobalStyle"
import SafeAppProvider from "./SafeAppProvider"
import App from "./App"

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <SafeAppProvider>
      <App />
    </SafeAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
