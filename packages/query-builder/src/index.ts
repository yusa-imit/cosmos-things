import { BuildInit, QueryDefinitions } from "./internalTypes"
import { QueryBuilder } from "./utils/QueryBuilder"
import { sort } from "./utils/sort"
import { getPrefix } from "./utils/getPrefix"

export function query(...params: QueryDefinitions[]) {
  if (params.length < 2) {
    throw new Error("Query needs at least two functions with SELECT and FROM")
  }
  var pfx = getPrefix()
  var builder = new QueryBuilder(pfx, sort(...params))
}

export function dev_query(prefix: string, ...params: QueryDefinitions[]) {
  var builder = new QueryBuilder(prefix, sort(...params))
}
