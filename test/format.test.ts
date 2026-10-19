import { expect, it } from 'vitest';
import { formatList } from '../src/format.js';
import { addTask, completeTask } from '../src/tasks.js';

it('prints one line per task with its state', () => {
  const list = completeTask(addTask(addTask([], 'Buy milk'), 'Call Sam'), 1);
  expect(formatList(list)).toBe('[x] 1 Buy milk\n[ ] 2 Call Sam');
});

it('prints nothing for an empty list', () => {
  expect(formatList([])).toBe('');
});
