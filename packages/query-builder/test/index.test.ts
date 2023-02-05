import { query } from "../src/"
import { from } from "../src/functions/from"
import { op } from "../src/functions/op"
import { select } from "../src/functions/select"
import { where } from "../src/functions/where"

describe("cosmos-query-builder test", () => {
  test("base query string", () => {
    query(
      select("article"),
      from("container", "c"),
      where(
        op("article.title", "=", "title"),
        "AND",
        op("article.count", ">", 0)
      )
    )
  })
  test("query string with multiple where", () => {})
  test("", () => {})
})
