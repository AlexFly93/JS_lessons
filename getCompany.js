import { company } from "./companies.js";
import util from "util";

export function findValueByKey(companyName, companyObj, results = []) {
  if (!companyObj) {
    companyObj = company;
  }

  if (companyName === companyObj.name) {
    results.push(companyObj);
  }

  if (companyObj.clients) {
    for (const client of companyObj.clients) {
      findValueByKey(companyName, client, results);
    }
  }

  if (companyObj.partners) {
    for (const partner of companyObj.partners) {
      findValueByKey(companyName, partner, results);
    }
  }

  const finalResult = results.length
    ? results.map((result) => util.inspect(result, { depth: null }))
    : null;

  if (finalResult) {
    return finalResult.reduce((acc, cur) => acc + cur, "");
  } else {
    return null;
  }
}
