import { QueryBuilder } from "../utils/QueryBuilder"
import { Operations } from "../internalTypes"
function op(
  this: void | QueryBuilder,
  target: string,
  op: Operations,
  value: any
) {
  return { target, op, value, type: "op" }
}

op.type = "op"
type OpFunction = typeof op
type OpFunctionReturn = ReturnType<OpFunction>
export { op }
export type { OpFunction, OpFunctionReturn }
