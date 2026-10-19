import type { TaskList } from './tasks.js';

/** One line per task: `[x] 2 Buy milk` for a done task, `[ ] 3 Call Sam` for an open one. */
export function formatList(list: TaskList): string {
  return list.map((t) => `[${t.done ? 'x' : ' '}] ${t.id} ${t.title}`).join('\n');
}
