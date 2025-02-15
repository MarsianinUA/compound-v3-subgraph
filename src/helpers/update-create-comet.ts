import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts";
import { Comet as CometContract } from "../../generated/templates/Comet/Comet";
import { Comet } from "../../generated/schema";

export function updateOrCreateComet(address: Address, updatedAt: BigInt): void {
  let comet = Comet.load(Bytes.fromHexString(address.toHexString()));
  if (!comet) {
    comet = new Comet(Bytes.fromHexString(address.toHexString()));
    comet.utilization = BigInt.fromI32(0);
    comet.borrowRate = BigInt.fromI32(0);
    comet.supplyRate = BigInt.fromI32(0);
  }

  let cometContract = CometContract.bind(address);

  const utilizationResult = cometContract.try_getUtilization();
  if (!utilizationResult.reverted) {
    comet.utilization = utilizationResult.value;
  }
  const getBorrowRateResult = cometContract.try_getBorrowRate(
    comet.utilization,
  );
  if (!getBorrowRateResult.reverted) {
    comet.borrowRate = getBorrowRateResult.value;
  }
  const supplyRateResult = cometContract.try_getSupplyRate(comet.utilization);
  if (!supplyRateResult.reverted) {
    comet.supplyRate = supplyRateResult.value;
  }

  comet.updatedAt = updatedAt;

  comet.save();
}
