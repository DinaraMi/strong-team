import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, editTodo } from '../actions/todoActions';

interface TodoFormProps {
  editTodoData?: { id: number; text: string; date: string; priority: string };
  onToggleEdit?: () => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ editTodoData, onToggleEdit }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState(editTodoData ? editTodoData.text : '');
  const [date, setDate] = useState(editTodoData ? editTodoData.date : '');
  const [priority, setPriority] = useState(editTodoData ? editTodoData.priority : '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editTodoData) {
      dispatch(editTodo(editTodoData.id, text, date, priority));
      if (onToggleEdit) {
        onToggleEdit();
      }
    } else {
      dispatch(addTodo(text, date, priority));
    }
    setText('');
    setDate('');
    setPriority('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Задача" value={text} onChange={(e) => setText(e.target.value)} required />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <select value={priority} onChange={(e) => setPriority(e.target.value)} required>
        <option value="">Выберите приоритет</option>
        <option value="high">Высокий</option>
        <option value="medium">Средний</option>
        <option value="low">Низкий</option>
      </select>
      <button type="submit">{editTodoData ? 'Редактировать' : 'Добавить'}</button>
    </form>
  );
};

export default TodoForm;
