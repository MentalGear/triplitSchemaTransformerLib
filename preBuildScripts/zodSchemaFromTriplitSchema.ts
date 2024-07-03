import { schemaToJSON } from '@triplit/db'
import { jsonSchemaToZod } from 'json-schema-to-zod'
import { schema } from '../triplit/triplitTestSchema'

const json = schemaToJSON({ collections: schema, version: 0 })

const selectedCollectionSchema = json?.collections.objectWrapped ?? {}

// has to be object else conversion does not work
// segmentSchemaJson.type = 'object'
// segmentSchemaJson.properties.content.type = 'object'

function changeTypeRecordToObject(prop) {
    if (prop.type !== 'record') return
    // debugger
    prop.type = 'object'
    // }
}

function recursivelyChangeTypeToObject(properties) {
    //
    if (typeof properties !== 'object' || properties === null) return

    changeTypeRecordToObject(properties)
    // Iterate over property names
    for (const key in properties) {
        // debugger
        // console.log(key, properties[key])
        recursivelyChangeTypeToObject(properties[key])
    }
}

selectedCollectionSchema

recursivelyChangeTypeToObject(selectedCollectionSchema)

debugger

// TODO: For some reason the jsonSchemaToZod package converts all into z.any
// need to step into jsonSchemaToZod to check why

const zodSchema = jsonSchemaToZod(selectedCollectionSchema)
console.log(`import { z } from 'zod'`)
console.log(`export const segementZodSchema =`, zodSchema)

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
