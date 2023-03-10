import { functions } from "../functions"
import { BuildInit } from "../internalTypes"

export class QueryBuilder {
  prefix: string
  pointer: number = 0
  namespace: Record<string, string> = {}
  query: {
    select: string
    from: string
    conditions: string[]
  } = {
    select: "",
    from: "",
    conditions: [],
  }
  values: Record<string, any> = {}
  constructor(prefix: string, arg: BuildInit) {
    this.prefix = prefix
    this.appendQuery(arg)
  }
  appendQuery(arg: BuildInit) {}
  buildQuery() {
    return
  }
  getLcsKey(str: string): string {
    Object.keys(this.namespace).every((v) => {})
  }
}
