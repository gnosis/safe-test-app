import React, { useState } from "react"
import styled from "styled-components"
import { Loader, Title, Tab } from "@gnosis.pm/safe-react-components"
import { useSafeApp } from "./SafeAppProvider"
import { AppTabs } from "./types"
import Main from "./tabs/Main"

const Container = styled.form`
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
    id: "0",
    label: "main",
  },
  { id: "1", label: "RPC" },
]

const App = (): React.ReactElement => {
  const { appsSdk, safeInfo } = useSafeApp()
  const [currentTab, setCurrentTab] = useState<string>("0")

  if (!safeInfo || !appsSdk) {
    return <Loader size="md" />
  }

  return (
    <Container>
      <Title size="sm">Gnosis Safe Test App</Title>
      <Tab
        selectedTab={currentTab}
        onChange={(val) => setCurrentTab(val as AppTabs)}
        items={tabs}
      />

      {currentTab === "0" && <Main sdk={appsSdk} safeInfo={safeInfo} />}
    </Container>
  )
}

export default App
