// https://github.com/module-federation/universe/blob/main/packages/utilities/src/utils/importRemote.ts
import { importRemote } from "@module-federation/utilities";

const getRemoteEntryUrlBase = async (name) => {
  const result = await fetch(`http://localhost:3004/remote/${name}`);
  const data = await result.json();
  return data.basepath;
};

const importFederatedModule = ({ remote, module }) => {
  // TODO Just enforce via types
  if (!remote || !module) {
    throw new Error("The options remote and module are required");
  }

  return importRemote({
    url: () => getRemoteEntryUrlBase(remote),
    scope: remote,
    module,
    // bustRemoteEntryCache: false
  });
};

export default importFederatedModule;
