export class QueryBuilder {
  pointer: number = 0
  namespace: Record<string, string> = {}
  query: {
    select: string
    from: string
    conditions: string[]
  }
  values: Record<string, any> = {}
  constructor(...args) {}
  buildQuery() {
    return
  }
  getLcsKey(str: string): string {
    Object.keys(this.namespace).every((v) => {})
  }
}
