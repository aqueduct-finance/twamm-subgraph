import { BigInt } from "@graphprotocol/graph-ts"
import { PairCreated } from "../generated/Factory/Factory"
import { Sync as SyncEvent } from "../generated/templates/Pool/Pool"
import { Pool, Sync } from "../generated/schema"
import { DataSourceTemplate } from "@graphprotocol/graph-ts"

export function handlePairCreated(event: PairCreated): void {
  let poolId = event.params.pair.toHexString()
  let pool = new Pool(poolId)
  pool.save()

  DataSourceTemplate.create("Pool", [poolId])
}

export function handleSync(event: SyncEvent): void {
  let poolId = event.address.toHex()
  let pool = Pool.load(poolId)
  if (pool == null) {
    pool = new Pool(poolId)
    pool.save()
  }

  let syncId = event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  let sync = new Sync(syncId)
  sync.pool = pool.id
  sync.blockTimestamp = event.block.timestamp
  sync.reserve0 = event.params.reserve0
  sync.reserve1 = event.params.reserve1
  sync.save()
}
