import { QueryBuilder } from "../utils/QueryBuilder"
import { ValueDefinition } from "./value"

type SelectParameters = Parameters<SelectFunction>
type SelectDefinition = {
  type: "select"
  params: SelectParameters
}
interface SelectFunction {
  (def?: ValueDefinition | string, as?: string): SelectDefinition
}

const select: SelectFunction = function (def, as?) {
  return {
    type: "select",
    params: [def, as],
  }
}

interface ISelectFunction {
  (this: QueryBuilder, ...params: SelectParameters): void
}

const _select: ISelectFunction = function (this, def, as) {}

export { select, _select }
export type { SelectFunction, SelectDefinition, ISelectFunction }
