import { getPrefix } from "../../src/utils/getPrefix"

describe("prefix module test", () => {
  test("prefix test", () => {
    expect(getPrefix()).toHaveLength(10)
  })
  const arr = new Array(10).map(() => getPrefix())
  const set = new Set()
  arr.forEach((v) => {
    test(`Generated prefix ${v} is acceptable`, () => {
      expect(set.has(v)).toBeFalsy()
      set.add(v)
    })
  })
})
