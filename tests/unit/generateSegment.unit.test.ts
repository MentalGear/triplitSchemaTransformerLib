import { describe, expect, test } from 'vitest'
import { addSessionSegment } from '~/src/lib/addSessionSegment'

describe('ML data generation', () => {
    test('return a generated segment', async () => {
        const res = await addSessionSegment()
        debugger
        expect(res).toEqual({})
    }, 20000)
})
