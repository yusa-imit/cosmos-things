import { QueryBuilder } from "../utils/QueryBuilder"

type FromDefinition = {
  type: "from"
  params: string
}
function from(this: QueryBuilder | void, name: string): FromDefinition | void {
  if (!(this instanceof QueryBuilder)) {
    return {
      type: "from",
      params: name,
    }
  }
  this.namespace[name] = "a" + this.pointer
  this.pointer++
  this.query.from = `FROM ${name} AS ${this.namespace[name]}`
}

from.type = "from"
type FromFunction = typeof from
export { from }
export type { FromFunction }
