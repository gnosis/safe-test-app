import React, { useState } from "react"
import { Button, TextInput, Text } from "evergreen-ui"
import { SdkInstance } from "@gnosis.pm/safe-apps-sdk"

type OwnProps = {
  sdk: SdkInstance
}

const GetBalance = ({ sdk }: OwnProps): React.ReactElement => {
  const [address, setAddress] = useState("")
  // const [result, setResult] = useState("")

  const handleClick = () => {
    sdk.eth.getBalance({ params: [address] })
  }

  return (
    <div>
      <Text>getBalance(address)</Text>
      <TextInput
        value={address}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setAddress(e.target.value)
        }}
      />
      <Button appearance="primary" onClick={handleClick}>
        Request
      </Button>
    </div>
  )
}

export default GetBalance
