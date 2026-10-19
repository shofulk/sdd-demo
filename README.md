# sdd-demo

A tiny task-list library in TypeScript: add, complete, remove and list tasks, and print a list.
It is the demo project for the [sdd plugins](https://github.com/shofulk/sdd-marketplace) for
Claude Code.

```ts
import { addTask, completeTask, formatList } from './src/index.js';

const list = completeTask(addTask(addTask([], 'Buy milk'), 'Call Sam'), 1);
console.log(formatList(list));
// [x] 1 Buy milk
// [ ] 2 Call Sam
```

## Layout

- `src/tasks.ts` — the task list: every function returns a new list, nothing is mutated.
- `src/format.ts` — printing.
- `src/index.ts` — the public exports.
- `test/` — vitest tests, one file per source file.

## Checks

Node 20.19 or later.

```sh
npm install
npm run typecheck   # tsc --noEmit
npm run lint        # eslint .
npm test            # vitest run
```
