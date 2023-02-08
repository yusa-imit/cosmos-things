import { QueryFunction } from "../internalTypes"
import { QueryBuilder } from "../utils/QueryBuilder"

type FromParameters = [name: string, as?: string | undefined]
type FromDefinition = {
  type: "from"
  params: FromParameters
}
interface FromFunction {
  (...params: FromParameters): FromDefinition
}

const from: FromFunction = function (name, as) {
  return {
    type: "from",
    params: [name, as],
  }
}

interface IFromFunction {
  (this: QueryBuilder, ...params: FromParameters): void
}

const _from: IFromFunction = function (this, name, as) {
  if (as) {
    this.namespace[name] = as
  } else {
    this.namespace[name] = this.prefix + "_ns_" + this.pointer++
  }
  this.query.from = `FROM ${name} AS ${this.namespace[name]}`
}
export { from, _from }
export type { FromFunction, FromDefinition, IFromFunction }
