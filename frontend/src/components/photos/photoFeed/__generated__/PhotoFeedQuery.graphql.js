/**
 * @generated SignedSource<<8940a53493866f63347cd1cbce188833>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Photo",
    "kind": "LinkedField",
    "name": "photos",
    "plural": true,
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "PhotoFeedQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "PhotoFeedQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "992463cae3f2a1e3f15a558636d08756",
    "id": null,
    "metadata": {},
    "name": "PhotoFeedQuery",
    "operationKind": "query",
    "text": "query PhotoFeedQuery {\n  photos {\n    id\n    url\n    caption\n    generatedCaption\n  }\n}\n"
  }
};
})();

node.hash = "f058d7e980a6bc9d5f67c1b8cac76734";

module.exports = node;
