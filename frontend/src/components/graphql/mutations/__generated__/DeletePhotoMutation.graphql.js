/**
 * @generated SignedSource<<1d4734bc5de6c5364a87b319a51634e2>>
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
    "name": "deletePhoto",
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
    "name": "DeletePhotoMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeletePhotoMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "ff78fceaccb84b4e820d78200e55988d",
    "id": null,
    "metadata": {},
    "name": "DeletePhotoMutation",
    "operationKind": "mutation",
    "text": "mutation DeletePhotoMutation(\n  $url: String!\n) {\n  deletePhoto(url: $url) {\n    id\n    url\n  }\n}\n"
  }
};
})();

node.hash = "f729d21b2b8845e6e6b5d53f304017f7";

module.exports = node;
