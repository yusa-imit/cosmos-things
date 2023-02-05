import { FromDefinition } from "./functions/from"
import { OpFunctionReturn } from "./functions/op"
import { SelectDefinition } from "./functions/select"
import { BuildInit, QueryBuildingFunction } from "./internalTypes"
import { QueryBuilder } from "./utils/QueryBuilder"
import { sort } from "./utils/sort"

export function query(
  this: void | QueryBuilder,
  ...params: QueryBuildingFunction[]
) {
  if (params.length < 2) {
    throw new Error("Query needs at least two functions with SELECT and FROM")
  }
  var builder
  if (!(this instanceof QueryBuilder)) {
    builder = new QueryBuilder(sort(...params))
  }
}
