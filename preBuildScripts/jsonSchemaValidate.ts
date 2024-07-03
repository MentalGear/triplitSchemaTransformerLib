import {
    Draft04,
    Draft06,
    Draft07,
    Draft,
    JsonError,
} from 'json-schema-library'
debugger
import schemaToCheck from '../generatedSchemas/jsonSchema.json'

const jsonSchema: Draft = new Draft07(schemaToCheck)
const data = {}
const errors: JsonError[] = jsonSchema.validate({})
