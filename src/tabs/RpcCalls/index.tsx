import React from "react"
import { SdkInstance } from "@gnosis.pm/safe-apps-sdk"
import GetBalance from "./GetBalance"
import GetCode from "./GetCode"
import GetStorageAt from "./GetStorageAt"
import Call from "./Call"

type OwnProps = {
  sdk: SdkInstance
}

const RpcCalls = ({ sdk }: OwnProps) => {
  return (
    <div>
      <GetBalance sdk={sdk} />
      <hr />
      <GetCode sdk={sdk} />
      <hr />
      <GetStorageAt sdk={sdk} />
      <hr />
      <Call sdk={sdk} />
    </div>
  )
}

export default RpcCalls
