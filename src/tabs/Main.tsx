import React, { useState } from "react"
import { Button, TextInput, Text } from "evergreen-ui"
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

    // sdk.sendTransactions(txs)
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

    // sdk.sendTransactionsWithParams({ txs, params })
  }

  return (
    <div>
      <Text size={500}>Click button to submit transaction</Text>

      <Button appearance="primary" onClick={handleSendTransactionsClick}>
        Trigger dummy tx (sendTransactions)
      </Button>
      <hr />
      <TextInput
        value={safeTxGas}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSafeTxGas(e.target.value)
        }}
      />

      <Button
        appearance="primary"
        onClick={handleSendTransactionsWithParamsClick}
      >
        Trigger dummy tx (sendTransactionsWithParams)
      </Button>
    </div>
  )
}

export default Main
