import { Task } from './types';

type Action =
  | { type: 'ADD_TASK'; text: string }
  | { type: 'TOGGLE_TASK'; id: number }
  | { type: 'EDIT_TASK'; id: number; newText: string }
  | { type: 'FILTER_TASKS'; filter: string };

type State = {
  tasks: Task[];
  filter: 'all' | 'active' | 'completed';
};

export const initialState: State = {
  tasks: [
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Learn TypeScript', completed: true },
  ],
  filter: 'all',
};

export function taskReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, { id: Date.now(), text: action.text, completed: false }],
      };

    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.id ? { ...task, completed: !task.completed } : task
        ),
      };

    case 'EDIT_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.id ? { ...task, text: action.newText } : task
        ),
      };

    case 'FILTER_TASKS':
      return {
        ...state,
        filter: action.filter as 'all' | 'active' | 'completed',
      };

    default:
      return state;
  }
}
