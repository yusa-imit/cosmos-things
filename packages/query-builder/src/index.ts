import { BuildInit, QueryDefinitions } from "./internalTypes"
import { QueryBuilder } from "./utils/QueryBuilder"
import { sort } from "./utils/sort"

export function query(
  this: void | QueryBuilder,
  ...params: QueryDefinitions[]
) {
  if (params.length < 2) {
    throw new Error("Query needs at least two functions with SELECT and FROM")
  }
  var prefix
  var builder

  if (!(this instanceof QueryBuilder)) {
    builder = new QueryBuilder(sort(...params))
  }
}
