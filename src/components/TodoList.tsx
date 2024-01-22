import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, toggleTodo, searchTodo, sortTodo } from '../actions/todoActions';
import { RootState } from '../reducers/todoReducer';

const TodoList: React.FC = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todoReducer.todos);

  const handleDelete = (id: number) => {
    dispatch(deleteTodo(id));
  };

  const handleToggle = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const handleSearch = (searchText: string) => {
    dispatch(searchTodo(searchText));
  };

  const handleSort = (sortBy: string) => {
    dispatch(sortTodo(sortBy));
  };

  return (
    <div>
      <input type="text" placeholder="Поиск..." onChange={(e) => handleSearch(e.target.value)} />
      <select onChange={(e) => handleSort(e.target.value)}>
        <option value="">Сортировать по</option>
        <option value="name">Название</option>
        <option value="date">Дата</option>
        <option value="priority">Приоритет</option>
      </select>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
            <button onClick={() => handleDelete(todo.id)}>Удалить</button>
            <button onClick={() => handleToggle(todo.id)}>Переключить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
