import {sub, sum} from './calc.ts';
import {assertEquals} from '../dependencies.ts';

Deno.test('Sum function', () => {
    const result = sum(41, 1);

    assertEquals(result, 42)
})

Deno.test('Sub function', () => {
    const result = sub(43, 1);

    assertEquals(result, 42)
})