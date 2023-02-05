import { QueryBuilder } from "../utils/QueryBuilder"
import { Operations, ExpandableParams } from "../internalTypes"
import { op, OpFunction, OpFunctionReturn } from "./op"

type WhereBasic = OpFunctionReturn
type BetweenOperands = "AND" | "OR" | "AND NOT" | "OR NOT"
type WhereExtends = ExpandableParams<[BetweenOperands, OpFunctionReturn]>
type WhereDefinitionParams = [WhereBasic, ...WhereExtends]
interface WhereDefinition {
  type: "where"
  params: WhereDefinitionParams | string
}
function where(
  this: void | QueryBuilder,
  ...params: WhereDefinitionParams
): void | WhereDefinition {
  if (!(this instanceof QueryBuilder)) {
    return {
      type: "where",
      params,
    }
  } else {
    if (params.length < 0)
      throw new Error("WHERE function needs at least one operands.")
    if (params.length % 2 === 0)
      throw new Error("WHERE function cannot accept parameters of even number.")
    const first = params[0]
    const f_key = "@v" + Object.keys(this.values).length
    this.values[f_key] = first.value
    this.query.conditions.push(`${first.target}${first.op}${f_key}`)
    let length = 1
    while (length < params.length) {
      const [between, opResult]: [
        "AND" | "OR" | "AND NOT" | "OR NOT",
        OpFunctionReturn
      ] = [
        params[length] as BetweenOperands,
        params[length + 1] as OpFunctionReturn,
      ]
      this.query.conditions.push(between)
      const key = "@v" + Object.keys(this.values).length
      this.values[key] = opResult.value
      this.query.conditions.push(`${opResult.target}${opResult.op}${key}`)
    }
  }
}
where.type = "where"
where(op("a", "!=", ""), "AND", op("a", "&", "d"))
type WhereFunction = typeof where
export { where }
export type { WhereFunction, WhereDefinition }
