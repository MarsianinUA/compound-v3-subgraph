import {
  AbsorbCollateral,
  AbsorbDebt,
  Approval,
  BuyCollateral,
  PauseAction,
  Supply,
  SupplyCollateral,
  Transfer,
  TransferCollateral,
  Withdraw,
  WithdrawCollateral,
  WithdrawReserves,
} from "../generated/templates/Comet/Comet";
import { updateOrCreateComet } from "./helpers/update-create-comet";

export function handleAbsorbCollateral(event: AbsorbCollateral): void {
  updateOrCreateComet(event.address, event.block.timestamp);
}

export function handleAbsorbDebt(event: AbsorbDebt): void {
  updateOrCreateComet(event.address, event.block.timestamp);
}

export function handleApproval(event: Approval): void {
  updateOrCreateComet(event.address, event.block.timestamp);
}

export function handleBuyCollateral(event: BuyCollateral): void {
  updateOrCreateComet(event.address, event.block.timestamp);
}

export function handlePauseAction(event: PauseAction): void {
  updateOrCreateComet(event.address, event.block.timestamp);
}

export function handleSupply(event: Supply): void {
  updateOrCreateComet(event.address, event.block.timestamp);
}

export function handleSupplyCollateral(event: SupplyCollateral): void {
  updateOrCreateComet(event.address, event.block.timestamp);
}

export function handleTransfer(event: Transfer): void {
  updateOrCreateComet(event.address, event.block.timestamp);
}

export function handleTransferCollateral(event: TransferCollateral): void {
  updateOrCreateComet(event.address, event.block.timestamp);
}

export function handleWithdraw(event: Withdraw): void {
  updateOrCreateComet(event.address, event.block.timestamp);
}

export function handleWithdrawCollateral(event: WithdrawCollateral): void {
  updateOrCreateComet(event.address, event.block.timestamp);
}

export function handleWithdrawReserves(event: WithdrawReserves): void {
  updateOrCreateComet(event.address, event.block.timestamp);
}
