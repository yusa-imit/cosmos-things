import { dev_query, query } from "../src/"
import { from } from "../src/functions/from"
import { op } from "../src/functions/op"
import { select } from "../src/functions/select"
import { where } from "../src/functions/where"
import { getPrefix } from "../src/utils/getPrefix"
import type { SqlQuerySpec } from "@azure/cosmos"

describe("cosmos-query-builder test", () => {
  test("base query string", () => {
    const prefix = getPrefix()
    expect(
      dev_query(
        prefix,
        select("c.article"),
        from("container", "c"),
        where(
          op("c.article.title", "=", "title"),
          "AND",
          op("c.article.count", ">", 0)
        )
      )
    ).toEqual<SqlQuerySpec>({
      query: `SELECT c.article FROM container AS c WHERE c.article.title=@${prefix}_v_0 AND c.article.count>@${prefix}_v_1`,
      parameters: [
        { name: `${prefix}_v_0`, value: "title" },
        { name: `${prefix}_v_1`, value: 0 },
      ],
    })
  })
  test("query string with multiple where", () => {})
  test("", () => {})
})
