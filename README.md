A sample for https://github.com/typicode/lowdb/issues/554

Just `npm install` and `npm run-script build` (or just `next build`).

What happens:

`> npm run-script build`

```
info  - Linting and checking validity of types ..It looks like you're trying to use TypeScript but do not have the required package(s) installed.
Installing dependencies

If you are not trying to use TypeScript, please remove the tsconfig.json file from your package root (and any TypeScript files in your pages directory).


Installing devDependencies (npm):
- typescript
- @types/react
- @types/node
info  - Linting and checking validity of types .
added 6 packages, and audited 28 packages in 804ms

info  - Linting and checking validity of types ..Failed to compile.

./services/db.ts:5:26
Type error: Cannot find module 'lowdb/node' or its corresponding type declarations.

  3 | 
  4 | import { Low } from 'lowdb'
> 5 | import { JSONFile } from 'lowdb/node'
    |                          ^
  6 | 
  7 | const dbFile = join(homedir(), 'db.json')
  8 | const dbAdapter = new JSONFile(dbFile)
```