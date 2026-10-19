// A task list kept in memory. Every function returns a new list; nothing is mutated.

export interface Task {
  readonly id: number;
  readonly title: string;
  readonly done: boolean;
}

export type TaskList = readonly Task[];

/** Adds a task with the next free id. The title is trimmed and must not be empty. */
export function addTask(list: TaskList, title: string): TaskList {
  const trimmed = title.trim();
  if (!trimmed) throw new Error('A task needs a title');
  const id = list.reduce((max, t) => Math.max(max, t.id), 0) + 1;
  return [...list, { id, title: trimmed, done: false }];
}

/** Marks the task with `id` done. An unknown id throws. */
export function completeTask(list: TaskList, id: number): TaskList {
  if (!list.some((t) => t.id === id)) throw new Error(`No task with id ${id}`);
  return list.map((t) => (t.id === id ? { ...t, done: true } : t));
}

/** Removes the task with `id`. An unknown id throws. */
export function removeTask(list: TaskList, id: number): TaskList {
  if (!list.some((t) => t.id === id)) throw new Error(`No task with id ${id}`);
  return list.filter((t) => t.id !== id);
}

/** The tasks still open, in the order they were added. */
export function openTasks(list: TaskList): TaskList {
  return list.filter((t) => !t.done);
}
