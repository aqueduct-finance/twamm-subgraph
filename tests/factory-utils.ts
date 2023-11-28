import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  PairCreated,
  SetAuction,
  SetAuctionSetter,
  SetFeeTo,
  SetFeeToSetter
} from "../generated/Factory/Factory"

export function createPairCreatedEvent(
  token0: Address,
  token1: Address,
  pair: Address,
  param3: BigInt
): PairCreated {
  let pairCreatedEvent = changetype<PairCreated>(newMockEvent())

  pairCreatedEvent.parameters = new Array()

  pairCreatedEvent.parameters.push(
    new ethereum.EventParam("token0", ethereum.Value.fromAddress(token0))
  )
  pairCreatedEvent.parameters.push(
    new ethereum.EventParam("token1", ethereum.Value.fromAddress(token1))
  )
  pairCreatedEvent.parameters.push(
    new ethereum.EventParam("pair", ethereum.Value.fromAddress(pair))
  )
  pairCreatedEvent.parameters.push(
    new ethereum.EventParam("param3", ethereum.Value.fromUnsignedBigInt(param3))
  )

  return pairCreatedEvent
}

export function createSetAuctionEvent(auction: Address): SetAuction {
  let setAuctionEvent = changetype<SetAuction>(newMockEvent())

  setAuctionEvent.parameters = new Array()

  setAuctionEvent.parameters.push(
    new ethereum.EventParam("auction", ethereum.Value.fromAddress(auction))
  )

  return setAuctionEvent
}

export function createSetAuctionSetterEvent(
  auctionSetter: Address
): SetAuctionSetter {
  let setAuctionSetterEvent = changetype<SetAuctionSetter>(newMockEvent())

  setAuctionSetterEvent.parameters = new Array()

  setAuctionSetterEvent.parameters.push(
    new ethereum.EventParam(
      "auctionSetter",
      ethereum.Value.fromAddress(auctionSetter)
    )
  )

  return setAuctionSetterEvent
}

export function createSetFeeToEvent(feeTo: Address): SetFeeTo {
  let setFeeToEvent = changetype<SetFeeTo>(newMockEvent())

  setFeeToEvent.parameters = new Array()

  setFeeToEvent.parameters.push(
    new ethereum.EventParam("feeTo", ethereum.Value.fromAddress(feeTo))
  )

  return setFeeToEvent
}

export function createSetFeeToSetterEvent(
  feeToSetter: Address
): SetFeeToSetter {
  let setFeeToSetterEvent = changetype<SetFeeToSetter>(newMockEvent())

  setFeeToSetterEvent.parameters = new Array()

  setFeeToSetterEvent.parameters.push(
    new ethereum.EventParam(
      "feeToSetter",
      ethereum.Value.fromAddress(feeToSetter)
    )
  )

  return setFeeToSetterEvent
}
