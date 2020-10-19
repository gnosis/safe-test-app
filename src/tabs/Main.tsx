import React, { useState } from "react"
import { Button, Text, TextField } from "@gnosis.pm/safe-react-components"
import { SdkInstance, SafeInfo } from "@gnosis.pm/safe-apps-sdk"

type OwnProps = {
  sdk: SdkInstance
  safeInfo: SafeInfo
}

const Main = ({ sdk, safeInfo }: OwnProps): React.ReactElement => {
  const [safeTxGas, setSafeTxGas] = useState("70000")

  const handleSendTransactionsClick = () => {
    // just an example, this is not a valid transaction
    const txs = [
      {
        to: safeInfo?.safeAddress,
        value: "0",
        data: "0x",
      },
    ]

    sdk.sendTransactions(txs)
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

    sdk.sendTransactionsWithParams({ txs, params })
  }

  return (
    <div>
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
      <TextField
        label="SafeTxGas"
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
    </div>
  )
}

export default Main
