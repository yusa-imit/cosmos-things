function value(param: Record<string, string>) {
  return {
    type: "value",
    params: param,
  }
}
type ValueFunction = typeof value
type ValueDefinition = ReturnType<ValueFunction>

export { value }
export type { ValueFunction, ValueDefinition }
