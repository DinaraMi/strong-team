import React from 'react';
import './styles.css';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './reducers/todoReducer';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const store = configureStore({
  reducer: {
    todoReducer,
  },
});

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Список дел</h1>
        <TodoList />
        <TodoForm />
      </div>
    </Provider>
  );
};

export default App;
