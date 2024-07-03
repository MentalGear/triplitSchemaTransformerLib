import { schema } from '../triplit/schema'
import { schemaToJSON } from '@triplit/db'
import { jsonSchemaToZod } from 'json-schema-to-zod'

const json = schemaToJSON({ collections: schema, version: 0 })

const segmentSchemaJson = json?.collections?.session_segment?.schema ?? {}

// has to be object else conversion does not work
segmentSchemaJson.type = 'object'
segmentSchemaJson.properties.content.type = 'object'

const zodSchemaSegment = jsonSchemaToZod(segmentSchemaJson)
console.log(`import { z } from 'zod'`)
console.log(`export const segementZodSchema =`, zodSchemaSegment)

// let result = jsonToZod(segmentSchemaJson)
// result = result.replace('const schema', 'export const segementZodSchema')
// console.log(`import { z } from 'zod'`)
// console.log(result)

// debugger
// return result
// const zodSchemaString = result
//     .replace('const schema = z.object(', '')
//     .replace(');\n', '')
// debugger
