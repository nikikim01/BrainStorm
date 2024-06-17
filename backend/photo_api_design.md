# API Design Notes

## Photo Model

- url: String
- caption: String
- generatedCaption: String

# GraphQL Operations

## Queries

### 1. Retrieve All Photos

```
query {
            photos {
                id
                url
                caption
                generatedCaption
            }}
```

### 2. Retrieve Photo by URL

```
query {
            photo(url: "${testPhoto.url}") {
                id
                url
                caption
                generatedCaption
            }}
```

### 3. Retrieve Photos by Caption (not an MVP)

### 4. Retrieve Photos by Generated Caption (not an MVP)

## Mutations

### 1. Add Photo

- Request:

````

```

### 2. Update Photo

### 3. Delete Photo
```
````
