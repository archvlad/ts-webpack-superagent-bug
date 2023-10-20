import * as superagent from "superagent";

async function main() {
  let response = await superagent.get("http://ip-api.com/json");
  console.log(response.body);
}

main();
