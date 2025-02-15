import { CometDeployed as CometDeployedEvent } from "../generated/Configurator/Configurator";

import { Comet } from "../generated/templates";
import { updateOrCreateComet } from "./helpers/update-create-comet";

export function handleCometDeployed(event: CometDeployedEvent): void {
  updateOrCreateComet(event.params.cometProxy, event.block.timestamp);
  Comet.create(event.params.cometProxy);
}
