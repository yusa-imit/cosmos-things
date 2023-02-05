import { QueryBuilder } from "../utils/QueryBuilder"
import { ValueDefinition } from "./value"
function select(
  this: QueryBuilder | void,
  valueFunction: ValueDefinition
): void | SelectDefinition
function select(
  this: QueryBuilder | void,
  param?: string,
  as?: string
): void | SelectDefinition

function select(
  this: QueryBuilder | void,
  param0?: ValueDefinition | string,
  param1?: string
): void | SelectDefinition {
  if (!(this instanceof QueryBuilder)) {
    if (param0 && typeof param0 !== "string" && param0.type === "value") {
      return {
        type: "select",
        params: param0 as ValueDefinition,
      }
    } else {
      return {
        type: "select",
        params: [param0 as string | undefined, param1],
      }
    }
  } else this.query.select = `SELECT ${param0 ? "" : "*"}`
}
select.type = "select"
type SelectFunction = typeof select
type SelectDefinition = {
  type: "select"
  params: [string | undefined, string | undefined] | ValueDefinition
}

export { select }
export type { SelectFunction, SelectDefinition }
