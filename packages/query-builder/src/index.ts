import { SqlQuerySpec } from "@azure/cosmos";
import { SelectFunction } from "./functions/select";
import { WhereFunction } from "./functions/where";
import { AliasesObject } from "./internalTypes";
import { QueryBuilder } from "./utils/QueryBuilder";

type QueryConditions = WhereFunction;

function query(
  selectFunction: SelectFunction,
  fromFunction: ,
  ...queryConditions: QueryConditions[]
) {
  const builder = new QueryBuilder;
}
