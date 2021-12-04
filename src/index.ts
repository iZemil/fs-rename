import * as fs from 'fs';
import * as path from 'path';
import * as glob from 'glob';
import * as commandLineArgs from 'command-line-args';

import { options } from './utils/options';
import { caseFn, CASES } from './utils/constants';

export const renameAll = () => {
	if (!options.to) {
		console.log(`Define --to=(${Object.values(CASES).join('|')}) option`);
		return;
	}

	const filePaths = glob.sync('**/*', { ignore: `**/{${options.ignore}}/**` });
	const toCaseFn = caseFn[options.to];

	/**
	 * First rename files, then folders
	 */
	filePaths.sort((a: string, b: string) => b.split('/').length - a.split('/').length);

	let renamedItems = 0;
	filePaths.forEach((filePath: string) => {
		const pathParts = filePath.split('/');
		const fileName = pathParts.pop();
		const needRename = !!fileName;

		if (needRename) {
			const ext = path.extname(fileName);
			const fileNameArr = path.basename(fileName, ext).split('.');
			const newName = `${fileNameArr.map((part: string) => toCaseFn(part)).join('.')}${ext}`;
			const newPath = pathParts.concat(newName).join('/');

			console.log(`${fileName} => ${newName}`);
			fs.renameSync(filePath, newPath);
			renamedItems += 1;
		}
	});

	console.log(`-----------------\nRenamed items: ${renamedItems}`);
};
