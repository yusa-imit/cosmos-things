import { QueryBuilder } from "../utils/QueryBuilder"

function select(
  this: QueryBuilder | void,
  param?: string
): void | SelectDefinition {
  if (!(this instanceof QueryBuilder)) {
    return {
      type: "select",
      params: param,
    }
  } else this.query.select = `SELECT ${param ? "" : "*"}`
}
select.type = "select"
type SelectFunction = typeof select
type SelectDefinition = {
  type: "select"
  params: string | undefined
}

export { select }
export type { SelectFunction }
