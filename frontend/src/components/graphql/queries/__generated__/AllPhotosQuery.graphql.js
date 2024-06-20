/**
 * @generated SignedSource<<5aed69858a50d846854889c0075068a2>>
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
    "name": "AllPhotosQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AllPhotosQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "98cd77fbd61bbddcabb10a0487ae88e5",
    "id": null,
    "metadata": {},
    "name": "AllPhotosQuery",
    "operationKind": "query",
    "text": "query AllPhotosQuery {\n  photos {\n    id\n    url\n    caption\n    generatedCaption\n  }\n}\n"
  }
};
})();

node.hash = "c96e3a62cbb4be8168100d65c2813ef5";

module.exports = node;
