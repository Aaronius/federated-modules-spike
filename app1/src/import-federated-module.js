// https://github.com/module-federation/universe/blob/main/packages/utilities/src/utils/importRemote.ts
import { importRemote } from "@module-federation/utilities";

const getRemoteEntryUrlBase = async (name) => {
  const result = await fetch(`http://localhost:3004/remote/${name}`);
  const data = await result.json();
  return data.basepath;
};

const importFederatedModule = ({ name, module }) => {
  if (!name || !module) {
    throw new Error("The options ame and module are required");
  }

  return importRemote({
    url: () => getRemoteEntryUrlBase(name),
    scope: name,
    module,
  });
};

export default importFederatedModule;
