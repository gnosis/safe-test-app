import React, { useState } from "react"
import { Button, TextInput, Textarea, Text } from "evergreen-ui"
import SdkInstance, { SafeInfo } from "@gnosis.pm/safe-apps-sdk"

type OwnProps = {
  sdk: SdkInstance
  safeInfo: SafeInfo
}

const Main = ({ sdk, safeInfo }: OwnProps): React.ReactElement => {
  const [safeTxGas, setSafeTxGas] = useState("70000")
  const [txStatus, setTxStatus] = useState("")
  const [safeTxHash, setSafeTxHash] = useState("")
  const [message, setMessage] = useState("")
  const [signatureStatus, setSignatureStatus] = useState("")

  const handleSendTransactionsClick = async () => {
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

    setTxStatus("")
    try {
      const response = await sdk.txs.send({ txs, params })

      setTxStatus(
        `Transaction was created with safeTxHash: ${response.safeTxHash}`
      )
    } catch (err) {
      setTxStatus("Failed to send a transaction")
    }
  }

  const handleGetTxClick = async () => {
    setTxStatus("")
    try {
      const response = await sdk.txs.getBySafeTxHash(safeTxHash)

      console.log({ response })
    } catch (err) {
      console.error(err)
    }
  }

  const handleCheckSignatureClick = async () => {
    setSignatureStatus("")
    try {
      const response = await sdk.safe.isMessageSigned(message)
      console.log({ response })
      setSignatureStatus(`Message is ${response ? "signed" : "not signed"}`)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div>
      <Textarea
        value={JSON.stringify(safeInfo, null, 2)}
        marginTop={4}
        rows={4}
      />
      <hr />
      <Button
        appearance="primary"
        onClick={async () => {
          const balances = await sdk.safe.experimental_getBalances({
            currency: "rub",
          })

          console.log({ balances })
        }}
      >
        Get safe balances
      </Button>
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
      <Text>{txStatus}</Text>
      <hr />
      <TextInput
        value={safeTxHash}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSafeTxHash(e.target.value)
        }}
      />

      <Button appearance="primary" onClick={handleGetTxClick}>
        Get Transaction by safe tx hash
      </Button>
      <hr />
      <Text>Signatures</Text>
      <br />
      <TextInput
        placeholder="Message"
        value={message}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setMessage(e.target.value)
        }}
      />
      <Button
        appearance="primary"
        onClick={() => {
          sdk.txs.signMessage(message)
        }}
      >
        Sign message
      </Button>
      <Button appearance="default" onClick={handleCheckSignatureClick}>
        Check signature
      </Button>
      {signatureStatus && <Text>{signatureStatus}</Text>}
    </div>
  )
}

export default Main
