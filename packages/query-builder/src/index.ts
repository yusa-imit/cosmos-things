import { SqlQuerySpec } from "@azure/cosmos"
import { FromDefinition, FromFunction } from "./functions/from"
import { OpFunction, OpFunctionReturn } from "./functions/op"
import { SelectDefinition, SelectFunction } from "./functions/select"
import { WhereDefinition, WhereFunction } from "./functions/where"
import { BuildInit } from "./internalTypes"
import { QueryBuilder } from "./utils/QueryBuilder"

type QueryBuildingFunction =
  | FromDefinition
  | OpFunctionReturn
  | SelectDefinition
  | WhereDefinition

function sort(...params: QueryBuildingFunction[]): BuildInit {
  const init: BuildInit = { select: [], from: [], conditions: [] }
  params.forEach((param) => {
    if (param.type === "select") {
      init.select.push(param as SelectDefinition)
    } else if (param.type === "from") {
      init.from.push(param as FromDefinition)
    } else {
      init.conditions.push(param as OpFunctionReturn)
    }
  })
  return init
}

export function query(...params: QueryBuildingFunction[]) {
  if (params.length < 2) {
    throw new Error("Query needs at least two functions with SELECT and FROM")
  }
  const builder = new QueryBuilder(sort(...params))
}
