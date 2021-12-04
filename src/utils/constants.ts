const camelCase = require('lodash.camelcase');
const kebabCase = require('lodash.kebabcase');
const snakeCase = require('lodash.snakecase');

export const CASES = {
	Kebab: 'kebab',
	Snake: 'snake',
	Camel: 'camel',
} as const;

export type TCases = typeof CASES[keyof typeof CASES];

export const caseFn: Record<TCases, any> = {
	[CASES.Kebab]: kebabCase,
	[CASES.Snake]: snakeCase,
	[CASES.Camel]: camelCase,
} as const;
