import { QueryBuilder } from "../utils/QueryBuilder"
import { Operations, ExpandableParams } from "../internalTypes"
import { op, OpFunction, OpDefinition } from "./op"

type WhereBasic = OpDefinition
type BetweenOperands = "AND" | "OR" | "AND NOT" | "OR NOT"
type WhereExtends = ExpandableParams<[BetweenOperands, OpDefinition]>
type WhereParameters = [WhereBasic, ...WhereExtends]
interface WhereDefinition {
  type: "where"
  params: WhereParameters
}
interface WhereFunction {
  (...params: WhereParameters): WhereDefinition
}

const where: WhereFunction = function (...params) {
  if (params.length < 0)
    throw new Error("WHERE function needs at least one operands.")
  if (params.length % 2 === 0)
    throw new Error("WHERE function cannot accept parameters of even number.")
  return {
    type: "where",
    params: params,
  }
}

interface IWhereFunction {
  (this: QueryBuilder, ...params: WhereParameters): void
}

const _where: IWhereFunction = function (this, ...params) {
  if (!(this instanceof QueryBuilder))
    throw new Error("Cannot build query without query builder")
  const first = params[0]
  const f_key = "@v" + Object.keys(this.values).length
  this.values[f_key] = first.params[2]
  this.query.conditions.push(`${first.params[0]}${first.params[1]}${f_key}`)
  let length = 1
  while (length < params.length) {
    const [between, opResult] = [
      params[length] as BetweenOperands,
      params[length + 1] as OpDefinition,
    ]
    const [target, op, value] = opResult.params
    this.query.conditions.push(between)
    const key = "@v" + Object.keys(this.values).length
    this.values[key] = value
    this.query.conditions.push(`${target}${op}${key}`)
  }
}

where(op("a", "!=", ""), "AND", op("a", "&", "d"))
export { where, _where }
export type { WhereFunction, WhereDefinition, IWhereFunction }
