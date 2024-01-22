interface Todo {
  id: number;
  text: string;
  date: string;
  priority: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

const todoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [
          ...state.todos,
          {
            id: state.todos.length + 1,
            text: action.payload.text,
            date: action.payload.date,
            priority: action.payload.priority,
            completed: false,
          },
        ],
      };

    case 'EDIT_TODO':
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text, date: action.payload.date, priority: action.payload.priority }
            : todo
        ),
      };

    case 'DELETE_TODO':
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case 'TOGGLE_TODO':
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };

    case 'SEARCH_TODO':
      return {
        todos: state.todos.filter((todo) => todo.text.toLowerCase().includes(action.payload.toLowerCase())),
      };

    case 'SORT_TODO':
      return {
        todos: [...state.todos].sort((a, b) => {
          if (action.payload === 'date') {
            return new Date(a.date).getTime() - new Date(b.date).getTime();
          } else if (action.payload === 'priority') {
            return a.priority.localeCompare(b.priority);
          } else {
            return a.text.localeCompare(b.text);
          }
        }),
      };

    default:
      return state;
  }
};

export interface RootState {
  todoReducer: TodoState;
}

export default todoReducer;
