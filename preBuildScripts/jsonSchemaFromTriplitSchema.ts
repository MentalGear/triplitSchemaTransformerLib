import { schemaToJSON } from '@triplit/db'

import { schema } from '../triplit/triplitTestSchema'

const json = schemaToJSON({ collections: schema, version: 0 })

const selectedCollectionSchema = json?.collections.objectWrapped ?? {}

console.log(JSON.stringify(json))
