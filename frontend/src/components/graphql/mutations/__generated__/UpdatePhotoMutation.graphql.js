/**
 * @generated SignedSource<<c1cd464fd1f6e70e4e4a386b96a89030>>
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
  "name": "newUrl"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "url"
},
v3 = [
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
        "name": "newUrl",
        "variableName": "newUrl"
      },
      {
        "kind": "Variable",
        "name": "url",
        "variableName": "url"
      }
    ],
    "concreteType": "Photo",
    "kind": "LinkedField",
    "name": "updatePhoto",
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdatePhotoMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "UpdatePhotoMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "ee2fbe07af3e81f46aeef8bdc3b3a79f",
    "id": null,
    "metadata": {},
    "name": "UpdatePhotoMutation",
    "operationKind": "mutation",
    "text": "mutation UpdatePhotoMutation(\n  $url: String!\n  $newUrl: String\n  $caption: String\n) {\n  updatePhoto(url: $url, newUrl: $newUrl, caption: $caption) {\n    id\n    url\n    caption\n    generatedCaption\n  }\n}\n"
  }
};
})();

node.hash = "2c6c9e88f6f7829f151a3e5d902d1bbf";

module.exports = node;
