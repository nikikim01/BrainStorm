import { Environment, Network, RecordSource, Store } from "relay-runtime";
import fetchGraphQL from "./fetchGraphQL";

// Relay passes a "params" object with the query name and text
// we define a helper fn to call our fetchGraphQL utility with params.text
async function fetchRelay(params, variables) {
  console.log(
    `fetching query ${params.name} with ${JSON.stringify(variables)}`
  );
  return fetchGraphQL(params.text, variables);
}

// export a singleton instance of Relay Environment configured with our network fn:
export default new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
});
