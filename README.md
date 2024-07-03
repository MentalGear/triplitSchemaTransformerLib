## Purpose

This repo assess the compliance of Triplit's JSON Schema generation and suggests ways to improve on it. Also, it strives to test scripts to transform to other validation schemas (e.g. zod).

## Test Sets

The testing triplit schema contains 5 collections for a broad test case:

- __plain__: plain data types and simple object
- __defaults__: plain data types and simple object with defaults
- __optional__: plain data types and simple object that are optional
- __objectWrapped__: plain data types and nested (wrapped) object
- __relations__: plain data types, simple object & relations

## Generate

__JSON Schema__

`pnpm transform-triplit-to-json`

__Zod Schema__

`pnpm transform-triplit-to-zod`

---

## Current Findings: JSON

Note: co-parsed with an LLM, so there might be more issues.

__Summary of Issues__

The JSON schema is not fully compliant with the standard JSON Schema specification. JSON Schema doesn't recognize some elements like `type: set`, `type: date`, `options`, `default` with functions, or `query`.

### Custom Types
- **Problem**: Types such as `set` and `date` are not standard JSON Schema types.
- __Suggestion__:
    - For `set`: Use the standard JSON Schema `array` type with the `items` keyword specifying the type of items the array should contain.
    - For `date`: Use the `string` type with the `format` keyword set to `date-time` to represent date values.

### Options Property
- **Problem**: The `options` property is not a standard JSON Schema keyword.
- **Standard Keywords**: Use standard JSON Schema keywords such as `required`, `default`, `enum`, `minimum`, `maximum`, `pattern`, etc.
- __Suggestion__:
    - Instead of using `options`, directly use the standard JSON Schema keywords such as:
        - `nullable`: Use a union of types, for example, `["string", "null"]` to indicate a field can be either a string or null.
        - `default`: Provide static default values directly in the schema.

### Default with Functions
- **Problem**: JSON Schema doesn't support default values that are functions like `uuid` or `now`.

### Query Type and Cardinality
- **Problem**: The `query` and `cardinality` properties are not part of JSON Schema and have no meaning within a JSON Schema context.

### Nullable
- **Problem**: The keyword `nullable` is not part of JSON Schema.
- **Standard Practice**: Use a union of types to achieve similar functionality. For example, specify `["string", "null"]` as the type if you want a field to be either a string or null.
