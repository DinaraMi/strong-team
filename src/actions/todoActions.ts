export const addTodo = (text: string, date: string, priority: string) => ({
  type: 'ADD_TODO',
  payload: { text, date, priority },
});

export const editTodo = (id: number, text: string, date: string, priority: string) => ({
  type: 'EDIT_TODO',
  payload: { id, text, date, priority },
});

export const deleteTodo = (id: number) => ({
  type: 'DELETE_TODO',
  payload: id,
});

export const toggleTodo = (id: number) => ({
  type: 'TOGGLE_TODO',
  payload: id,
});

export const searchTodo = (searchText: string) => ({
  type: 'SEARCH_TODO',
  payload: searchText,
});

export const sortTodo = (sortBy: string) => ({
  type: 'SORT_TODO',
  payload: sortBy,
});
