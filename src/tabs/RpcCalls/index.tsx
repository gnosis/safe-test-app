import React from "react"
import GetBalance from "./GetBalance"

import { SdkInstance } from "@gnosis.pm/safe-apps-sdk"

type OwnProps = {
  sdk: SdkInstance
}

const RpcCalls = ({ sdk }: OwnProps) => {
  return (
    <div>
      <GetBalance sdk={sdk} />
    </div>
  )
}

export default RpcCalls
