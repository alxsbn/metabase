import type { TokenFeature } from "metabase-types/api";

export const useHasTokenFeature = (_settingName: TokenFeature) => {
  return true;
};
