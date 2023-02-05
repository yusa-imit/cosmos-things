import { FromDefinition } from "./functions/from"
import { OpFunctionReturn } from "./functions/op"
import { SelectDefinition } from "./functions/select"
import { WhereDefinition } from "./functions/where"

export type BuildInit = {
  select: SelectDefinition[]
  from: FromDefinition[]
  conditions: (OpFunctionReturn | WhereDefinition)[]
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
