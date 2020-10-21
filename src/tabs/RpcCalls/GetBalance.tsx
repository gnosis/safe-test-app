import React, { useState } from "react"
import styled from "styled-components"
import { Button, TextInput, Text } from "evergreen-ui"
import { SdkInstance } from "@gnosis.pm/safe-apps-sdk"

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

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
    <Container>
      <Text>getBalance(address)</Text>
      <TextInput
        value={address}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setAddress(e.target.value)
        }}
        marginTop={4}
      />
      <Button
        appearance="primary"
        onClick={handleClick}
        maxWidth={140}
        justifyContent="center"
        marginTop={8}
      >
        Request
      </Button>
    </Container>
  )
}

export default GetBalance
