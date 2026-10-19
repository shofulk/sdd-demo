import { describe, expect, it } from 'vitest';
import { addTask, completeTask, openTasks, removeTask } from '../src/tasks.js';

describe('addTask', () => {
  it('gives each task the next free id and trims the title', () => {
    const list = addTask(addTask([], 'Buy milk'), '  Call Sam ');
    expect(list).toEqual([
      { id: 1, title: 'Buy milk', done: false },
      { id: 2, title: 'Call Sam', done: false },
    ]);
  });

  it('rejects an empty title', () => {
    expect(() => addTask([], '   ')).toThrow('A task needs a title');
  });

  it('does not reuse the id of a removed task', () => {
    const list = removeTask(addTask(addTask([], 'a'), 'b'), 1);
    expect(addTask(list, 'c').map((t) => t.id)).toEqual([2, 3]);
  });
});

describe('completeTask', () => {
  it('marks one task done and leaves the input list unchanged', () => {
    const list = addTask(addTask([], 'a'), 'b');
    const done = completeTask(list, 2);
    expect(done[1]?.done).toBe(true);
    expect(list[1]?.done).toBe(false);
  });

  it('throws on an unknown id', () => {
    expect(() => completeTask([], 7)).toThrow('No task with id 7');
  });
});

describe('openTasks', () => {
  it('keeps the open tasks in order', () => {
    const list = completeTask(addTask(addTask(addTask([], 'a'), 'b'), 'c'), 2);
    expect(openTasks(list).map((t) => t.title)).toEqual(['a', 'c']);
  });
});
