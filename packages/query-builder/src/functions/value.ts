type ValueParameters = [Record<string, string>]
type ValueDefinition = {
  type: "value"
  params: ValueParameters
}
interface ValueFunction {
  (...params: ValueParameters): ValueDefinition
}

const value: ValueFunction = function (param) {
  return {
    type: "value",
    params: [param],
  }
}

export { value }
export type { ValueFunction, ValueDefinition }
