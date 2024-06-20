/**
 * @generated SignedSource<<86d1c75019f3eb672cc46aee424f3da5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "url"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "url",
        "variableName": "url"
      }
    ],
    "concreteType": "Photo",
    "kind": "LinkedField",
    "name": "photo",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "url",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "caption",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "generatedCaption",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PhotoByUrlQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PhotoByUrlQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "911521ad7134dc192d49e771cb45d076",
    "id": null,
    "metadata": {},
    "name": "PhotoByUrlQuery",
    "operationKind": "query",
    "text": "query PhotoByUrlQuery(\n  $url: String!\n) {\n  photo(url: $url) {\n    id\n    url\n    caption\n    generatedCaption\n  }\n}\n"
  }
};
})();

node.hash = "a7136070ff330752561a5c8a830aeae2";

module.exports = node;
