import React, { useState } from "react"
import { Button, TextInput, Textarea, Text } from "evergreen-ui"
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

    const params = {
      safeTxGas: +safeTxGas,
    }

    sdk.txs.send({ txs, params })
  }

  return (
    <div>
      <Textarea
        value={JSON.stringify(safeInfo, null, 2)}
        marginTop={4}
        rows={4}
      />
      <hr />
      <Text size={500}>Click button to submit transaction</Text>
      <hr />
      <TextInput
        value={safeTxGas}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSafeTxGas(e.target.value)
        }}
      />

      <Button appearance="primary" onClick={handleSendTransactionsClick}>
        Trigger dummy tx (safe.txs.send)
      </Button>
    </div>
  )
}

export default Main
