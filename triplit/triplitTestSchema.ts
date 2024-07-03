import type { ClientSchema } from '@triplit/client'
import { Schema as S } from '@triplit/db'

export const schema = {
    plain: {
        schema: S.Schema({
            id: S.Id(),
            boolean: S.Boolean(),
            string: S.String(),
            number: S.Number(),
            date: S.Date(),
            set_string: S.Set(S.String()),
            set_number: S.Set(S.Number()),
            set_boolean: S.Set(S.Boolean()),
            set_date: S.Set(S.Date()),

            object: S.Record({
                id: S.Id(),
                boolean: S.Boolean(),
                string: S.String(),
                number: S.Number(),
                date: S.Date(),
                set_string: S.Set(S.String()),
                set_number: S.Set(S.Number()),
                set_boolean: S.Set(S.Boolean()),
                set_date: S.Set(S.Date()),
            }),
        }),
    },

    defaults: {
        schema: S.Schema({
            id: S.Id(),
            boolean: S.Boolean({ default: false }),
            string: S.String({ default: 'a string' }),
            number: S.Number({ default: 1 }),
            date: S.Date({ default: S.Default.now() }),

            set_string: S.Set(S.String({ default: '1' })),
            set_number: S.Set(S.Number({ default: 1 })),
            set_boolean: S.Set(S.Boolean({ default: false })),
            set_date: S.Set(S.Date({ default: S.Default.now() })),

            object: S.Record({
                id: S.Id(),
                boolean: S.Boolean({ default: false }),
                string: S.String({ default: 'a string' }),
                number: S.Number({ default: 1 }),
                date: S.Date({ default: S.Default.now() }),

                set_string: S.Set(S.String({ default: '1' })),
                set_number: S.Set(S.Number({ default: 1 })),
                set_boolean: S.Set(S.Boolean({ default: false })),
                set_date: S.Set(S.Date({ default: S.Default.now() })),
            }),
        }),
    },

    optional: {
        schema: S.Schema({
            id: S.Optional(S.Id()),
            boolean: S.Optional(S.Boolean()),
            string: S.Optional(S.String()),
            number: S.Optional(S.Number()),
            date: S.Optional(S.Date()),
            set_string: S.Optional(S.Set(S.String())),
            set_number: S.Optional(S.Set(S.Number())),
            set_boolean: S.Optional(S.Set(S.Boolean())),
            set_date: S.Optional(S.Set(S.Date())),

            object: S.Record({
                id: S.Optional(S.Id()),
                boolean: S.Optional(S.Boolean()),
                string: S.Optional(S.String()),
                number: S.Optional(S.Number()),
                date: S.Optional(S.Date()),
                set_string: S.Optional(S.Set(S.String())),
                set_number: S.Optional(S.Set(S.Number())),
                set_boolean: S.Optional(S.Set(S.Boolean())),
                set_date: S.Optional(S.Set(S.Date())),
            }),
        }),
    },

    objectWrapped: {
        schema: S.Schema({
            id: S.Id(),

            object: S.Record({
                id: S.Optional(S.Id()),
                boolean: S.Optional(S.Boolean()),
                string: S.Optional(S.String()),
                number: S.Optional(S.Number()),
                date: S.Optional(S.Date()),
                set_string: S.Optional(S.Set(S.String())),
                set_number: S.Optional(S.Set(S.Number())),
                set_boolean: S.Optional(S.Set(S.Boolean())),
                set_date: S.Optional(S.Set(S.Date())),

                sub_object: S.Record({
                    id: S.Optional(S.Id()),
                    boolean: S.Optional(S.Boolean()),
                    string: S.Optional(S.String()),
                    number: S.Optional(S.Number()),
                    date: S.Optional(S.Date()),
                    set_string: S.Optional(S.Set(S.String())),
                    set_number: S.Optional(S.Set(S.Number())),
                    set_boolean: S.Optional(S.Set(S.Boolean())),
                    set_date: S.Optional(S.Set(S.Date())),
                }),
            }),
        }),
    },

    relations: {
        schema: S.Schema({
            id: S.Id(),
            boolean: S.Boolean(),
            string: S.String(),
            number: S.Number(),
            date: S.Date(),
            set_string: S.Set(S.String()),
            set_number: S.Set(S.Number()),
            set_boolean: S.Set(S.Boolean()),
            set_date: S.Set(S.Date()),

            relationById: S.RelationById('relationTarget', '$id'),
            relationMany: S.RelationMany('relationTarget', {
                where: [['id', '=', '$id']],
            }),
            relationOne: S.RelationOne('relationTarget', {
                where: [['id', '=', '$id']],
            }),

            object: S.Record({
                id: S.Id(),
                boolean: S.Boolean(),
                string: S.String(),
                number: S.Number(),
                date: S.Date(),
                set_string: S.Set(S.String()),
                set_number: S.Set(S.Number()),
                set_boolean: S.Set(S.Boolean()),
                set_date: S.Set(S.Date()),

                relationById: S.RelationById('relationTarget', '$id'),
                relationMany: S.RelationMany('relationTarget', {
                    where: [['id', '=', '$id']],
                }),
                relationOne: S.RelationOne('relationTarget', {
                    where: [['id', '=', '$id']],
                }),
            }),
        }),
    },

    relationTarget: {
        schema: S.Schema({
            id: S.Id(),
        }),
    },
} satisfies ClientSchema
