import { isNil, omitBy } from "lodash";

export const removeEmptyValues = (data) => {
  return omitBy(data, isNil);
};
