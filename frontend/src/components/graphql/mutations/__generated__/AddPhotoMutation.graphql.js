/**
 * @generated SignedSource<<2c5e316ec02b6be81b5da3c7fc2e6fbd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "caption"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "url"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "caption",
        "variableName": "caption"
      },
      {
        "kind": "Variable",
        "name": "url",
        "variableName": "url"
      }
    ],
    "concreteType": "Photo",
    "kind": "LinkedField",
    "name": "addPhoto",
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
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "AddPhotoMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "AddPhotoMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "c4da76a33e496c10af81c303e6c9b9f7",
    "id": null,
    "metadata": {},
    "name": "AddPhotoMutation",
    "operationKind": "mutation",
    "text": "mutation AddPhotoMutation(\n  $url: String!\n  $caption: String\n) {\n  addPhoto(url: $url, caption: $caption) {\n    id\n    url\n    caption\n  }\n}\n"
  }
};
})();

node.hash = "cac900b3e3fce28948e7090e9bc133bb";

module.exports = node;
