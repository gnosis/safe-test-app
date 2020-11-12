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

const GetBlockByNumber = ({ sdk }: OwnProps): React.ReactElement => {
  const [number, setNumber] = useState("0xA8ACC3")
  // const [result, setResult] = useState("")

  const handleClick = async () => {
    const response = await sdk.eth.getBlockByNumber({ params: [number] })

    console.log({ response })
  }

  return (
    <Container>
      <Text>getBlockByNumber(number)</Text>
      <TextInput
        value={number}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setNumber(e.target.value)
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

export default GetBlockByNumber
