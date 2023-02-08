import { QueryBuilder } from "../utils/QueryBuilder"
import { Operations } from "../internalTypes"
type OpParameters = [target: string, op: Operations, value: any]
type OpDefinition = {
  type: "op"
  params: OpParameters
}
interface OpFunction {
  (...params: OpParameters): OpDefinition
}

const op: OpFunction = function (target, op, value) {
  return { type: "op", params: [target, op, value] }
}

export { op }
export type { OpFunction, OpDefinition }
