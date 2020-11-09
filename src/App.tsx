import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Spinner, Heading, SegmentedControl } from "evergreen-ui"
import SDK, { SafeInfo } from "@gnosis.pm/safe-apps-sdk"
import { AppTabs } from "./types"
import Main from "./tabs/Main"
import RpcCalls from "./tabs/RpcCalls"

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
  const [sdk, setSDK] = useState<SDK | undefined>()
  const [safeInfo, setSafeInfo] = useState<SafeInfo | undefined>()

  useEffect(() => {
    async function loadSafeInfo() {
      const info = await sdkInstance.getSafeInfo()

      setSafeInfo(info)
    }

    const sdkInstance = new SDK()
    setSDK(sdkInstance)
    loadSafeInfo()
  }, [])

  const [currentTab, setCurrentTab] = useState<string>("0")

  if (!sdk || !safeInfo) {
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

      {currentTab === "0" && <Main sdk={sdk} safeInfo={safeInfo} />}
      {currentTab === "1" && <RpcCalls sdk={sdk} />}
    </Container>
  )
}

export default App
