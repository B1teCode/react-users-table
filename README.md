# Приложение Таблицы Пользователей

React-приложение, отображающее таблицу пользователей, полученных с dummy API. Пользователи могут быть найдены поисковым запросом, отсортированы и просмотрены подробно через модальные окна.

## Особенности

- Отображение таблицы пользователей с колонками для имени, возраста, пола, номера телефона и адреса.
- Возможность поиска для фильтрации пользователей по имени, возрасту, полу, номеру телефона или адресу.
- Сортировка пользователей по клику на заголовки колонок (по возрастанию и убыванию).
- Просмотр подробной информации о пользователе в модальном окне при клике на строку таблицы.

## Компоненты

### App.js

Основной компонент, отображающий структуру приложения и включающий `UserTable`.

### UserTable.js

Отвечает за:
- Получение пользователей с `https://dummyjson.com/users` при загрузке компонента.
- Управление состояниями пользователей, отфильтрованных пользователей, поискового запроса, выбранного пользователя и конфигурации сортировки.
- Обработку ввода поискового запроса для динамической фильтрации пользователей.
- Сортировку пользователей по заголовкам колонок.
- Отображение таблицы с отсортированными и отфильтрованными пользователями.

### UserModal.js

Компонент модального окна, отображающий подробную информацию о выбранном пользователе.

### SearchBar.js

Компонент для ввода пользовательского запроса для поиска конкретных пользователей.

## Установка

1. Клонируйте репозиторий.
2. Перейдите в директорию проекта.
3. Установите зависимости с помощью `npm install`.
4. Запустите приложение с помощью `npm start`.

## Использование

- Введите поисковый запрос в строку поиска для фильтрации пользователей.
- Кликните по заголовкам колонок для сортировки пользователей.
- Кликните по строке пользователя для просмотра подробной информации в модальном окне.

## Используемые технологии

- React
- JavaScript (ES6+)
- CSS

## Авторы

- Dummy данные предоставлены [dummyjson.com](https://dummyjson.com).

## Лицензия

Этот проект лицензирован по лицензии MIT - см. файл LICENSE.md для подробностей.
--------------------------------------------------------------------------------
# User Table Application

A React application that displays a table of users fetched from a dummy API. Users can be searched, sorted, and viewed in detail using modals.

## Features

- Display a table of users with columns for name, age, gender, phone number, and address.
- Search functionality to filter users based on name, age, gender, phone number, or address.
- Sort users by clicking on column headers (ascending and descending).
- Click on a user row to view detailed information in a modal.

## Components

### App.js

The main component rendering the application structure and including the `UserTable`.

### UserTable.js

Responsible for:
- Fetching users from `https://dummyjson.com/users` on component mount.
- Managing state for users, filtered users, search query, selected user, and sort configuration.
- Handling search input to filter users dynamically.
- Sorting users based on column headers.
- Rendering the table with sorted and filtered users.

### UserModal.js

A modal component that displays detailed information about a selected user.

### SearchBar.js

A component for user input to search for specific users based on input.

## Setup

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies with `npm install`.
4. Start the application with `npm start`.

## Usage

- Enter search queries in the search bar to filter users.
- Click on column headers to sort users.
- Click on a user row to view detailed information in a modal.

## Technologies Used

- React
- JavaScript (ES6+)
- CSS

## Credits

- Dummy data provided by [dummyjson.com](https://dummyjson.com).

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
