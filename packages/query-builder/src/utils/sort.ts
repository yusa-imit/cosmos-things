import { FromDefinition } from "../functions/from"
import { OpFunctionReturn } from "../functions/op"
import { SelectDefinition } from "../functions/select"
import { BuildInit, QueryBuildingFunction } from "../internalTypes"

export function sort(...params: QueryBuildingFunction[]): BuildInit {
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
