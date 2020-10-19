import React, { useState } from "react"
import styled from "styled-components"
import { Button, Loader, Text, Title } from "@gnosis.pm/safe-react-components"
import { useSafeApp } from "./SafeAppProvider"

const Container = styled.form`
  margin-bottom: 2rem;
  width: 100%;
  max-width: 480px;

  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
`

const App: React.FC = () => {
  const { appsSdk, safeInfo } = useSafeApp()
  const [safeTxGas, setSafeTxGas] = useState("70000")

  if (!safeInfo) {
    return <p>Couldn't connect to the safe</p>
  }

  const handleSendTransactionsClick = () => {
    // just an example, this is not a valid transaction
    const txs = [
      {
        to: safeInfo?.safeAddress,
        value: "0",
        data: "0x",
      },
    ]

    appsSdk?.sendTransactions(txs)
  }

  const handleSendTransactionsWithParamsClick = () => {
    // just an example, this is not a valid transaction
    const txs = [
      {
        to: safeInfo?.safeAddress,
        value: "0",
        data: "0x",
      },
    ]

    const params = {
      safeTxGas: +safeTxGas,
    }

    appsSdk?.sendTransactionsWithParams({ txs, params })
  }

  if (!safeInfo) {
    return <Loader size="md" />
  }

  return (
    <Container>
      <Title size="sm">Gnosis Safe App Starter</Title>

      <Text size="lg">Click button to submit transaction</Text>

      <Button
        color="primary"
        size="lg"
        variant="contained"
        onClick={handleSendTransactionsClick}
      >
        Trigger dummy tx (sendTransactions)
      </Button>
      <hr />
      <input
        value={safeTxGas}
        onChange={(e) => {
          setSafeTxGas(e.target.value)
        }}
      />

      <Button
        color="primary"
        size="lg"
        variant="contained"
        onClick={handleSendTransactionsWithParamsClick}
      >
        Trigger dummy tx (sendTransactionsWithParams)
      </Button>
    </Container>
  )
}

export default App
