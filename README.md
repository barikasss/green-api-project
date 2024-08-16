## Структура проекта


- **app.py**: Основной файл проекта на Flask, который обрабатывает запросы с фронтенда и взаимодействует с GREEN-API.
- **config/server.conf**: Конфигурация веб-сервера (например, Apache или Nginx). Этот файл может быть изменён в зависимости от нужд деплоя.
- **static/script.js**: JavaScript-код для взаимодействия с API. Этот файл отправляет запросы на сервер Flask и обрабатывает ответы.
- **static/style.css**: Стили для интерфейса веб-страницы, которая взаимодействует с API.
- **templates/index.html**: Основная HTML-страница с формами для ввода параметров и кнопками для вызова методов API.

project_root/
│

├── app.py # Основной серверный скрипт на Flask

├── config/ # Конфигурационные файлы

│ └── server.conf # Конфигурация веб-сервера (например, для Apache или Nginx)

├── static/ # Статические файлы (CSS, JS)

│ ├── script.js # JavaScript для выполнения запросов к API

│ └── style.css # Стили для фронтенда

├── templates/ # HTML-шаблоны для Flask

│ └── index.html # Основная HTML-страница с формами
