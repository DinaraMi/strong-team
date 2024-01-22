Простое приложение для управления списком задач с использованием React и Redux Toolkit
Это простое веб-приложение представляет собой список задач с функционалом добавления, редактирования, удаления, отметки о выполнении и сортировки задач.

Установка
Склонируйте репозиторий: git clone https://github.com/DinaraMi/strong-team.git
Перейдите в директорию проекта: cd strong-team
Установите зависимости: npm install
Запустите приложение: npm start
После запуска приложение будет доступно по адресу http://localhost:3000.

Использование
Добавление задачи: Введите текст задачи, выберите дату и приоритет, затем нажмите "Добавить".
Редактирование задачи: Нажмите на задачу, чтобы отредактировать текст, дату и приоритет. Затем нажмите "Редактировать".
Удаление задачи: Нажмите "Удалить" рядом с задачей.
Отметка о выполнении: Нажмите "Переключить" рядом с задачей.
Поиск задач: Используйте поле ввода для поиска задач по тексту.
Сортировка задач: Используйте выпадающий список для сортировки задач по названию, дате или приоритету.

Структура проекта
src/App.tsx: Основной компонент приложения, содержащий провайдер Redux.
src/reducers/todoReducer.ts: Редьюсер для управления состоянием задач.
src/actions/todoActions.ts: Действия Redux для добавления, редактирования, удаления, отметки о выполнении, поиска и сортировки задач.
src/components/TodoForm.tsx: Компонент формы для добавления и редактирования задач.
src/components/TodoList.tsx: Компонент списка задач с функционалом удаления, отметки о выполнении, поиска и сортировки.

Технологии
React
Redux Toolkit
TypeScript
