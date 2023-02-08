import { FromDefinition } from "./functions/from"
import { OpDefinition } from "./functions/op"
import { SelectDefinition } from "./functions/select"
import { WhereDefinition } from "./functions/where"

export type QueryKeywords =
  | "query"
  | "op"
  | "select"
  | "value"
  | "where"
  | "from"

export interface QueryFunction extends Function {
  type: QueryKeywords
}

export type QueryDefinitions =
  | FromDefinition
  | OpDefinition
  | SelectDefinition
  | WhereDefinition

export type BuildInit = {
  select: SelectDefinition[]
  from: FromDefinition[]
  conditions: (QueryDefinitions | WhereDefinition)[]
}
export type PossibleQueries = "12" | "23"
export type Operations =
  | ">"
  | ">="
  | "!="
  | "<="
  | "<"
  | "="
  | "<<"
  | ">>"
  | ">>>"
  | "&"
  | "|"
  | "^"
  | "AND"
  | "OR"
  | "NOT"

type MAXIMUM_ALLOWED_BOUNDARY = 50
export type ExpandableParams<
  Tuple extends Array<unknown>,
  Result extends Array<unknown> = [],
  Count extends ReadonlyArray<number> = []
> = Count["length"] extends MAXIMUM_ALLOWED_BOUNDARY
  ? Result
  : Tuple extends []
  ? []
  : Result extends []
  ? ExpandableParams<Tuple, Tuple, [...Count, 1]>
  : ExpandableParams<Tuple, Result | [...Result, ...Tuple], [...Count, 1]>
