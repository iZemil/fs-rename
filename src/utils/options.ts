import * as commandLineArgs from 'command-line-args';

import { CASES, TCases } from './constants';

export interface IOptions {
	to: TCases;
	ignore: string;
}

const optionDefinitions: commandLineArgs.OptionDefinition[] = [
	{
		name: 'to',
		type: String,
	},
	{
		name: 'ignore',
		type: String,
		defaultValue: 'coverage,node_modules',
	},
];

export const options = commandLineArgs(optionDefinitions) as IOptions;
