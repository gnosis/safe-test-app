import React, { useState } from "react"
import styled from "styled-components"
import { Spinner, Heading, SegmentedControl } from "evergreen-ui"
import { useSafeApp } from "./SafeAppProvider"
import { AppTabs } from "./types"
import Main from "./tabs/Main"

const Container = styled.div`
  margin-bottom: 2rem;
  width: 100%;
  max-width: 480px;

  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
`

const tabs = [
  {
    value: "0",
    label: "main",
  },
  { value: "1", label: "RPC" },
]

const App = (): React.ReactElement => {
  const { appsSdk, safeInfo } = useSafeApp()
  const [currentTab, setCurrentTab] = useState<string>("0")

  if (!safeInfo || !appsSdk) {
    return <Spinner size={24} />
  }

  return (
    <Container>
      <Heading size={700} marginTop="default">
        Gnosis Safe Test App
      </Heading>
      <SegmentedControl
        value={currentTab}
        onChange={(val) => setCurrentTab(val as AppTabs)}
        options={tabs}
      />

      {currentTab === "0" && <Main sdk={appsSdk} safeInfo={safeInfo} />}
    </Container>
  )
}

export default App
