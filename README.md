# ExpressMongoDB
Используем сервер Express и базу данных MongoDB

Установка MongoDB:
- brew install wget (пакетный менеджер)
- brew update
- npm install mongodb --save
- brew upgrade mongodb
- Подняться на самый вверх каталога дерикторий (выше user)
- Создать дерикторию командой sudo mkdir -p /data/db
- Выполнить команду sudo lsof -i tcp:27017 (покажет есть ли процесс занятый mongo)
- Исходя из номера процесса выполнить команду kill -9 395 (где 395 это номер процесса)
- sudo chown -R $USER /data/db
- команда для запуска MondoDB (mongod) "процесс должен весеть в терминале"
- команда для запуска сервера node server.js (выполнить в дериктории с сервером во второй вкладке (паралельно с запуском MongoDB))

Работа с MongoDB:
- Установить Postman https://www.getpostman.com/ (в нем мы будем создавать данные и работать с ними)
- Установить плагин для Chrome https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh?hl=ru (для красивого отображения Json)
- Ссылка url http://localhost:3012/notes (например мы создали коллекцию заметок через Postman) 
- Работа с Postman:
  - В поле для  url указыввем тот же url по которому доступен сайт http://localhost:3012/notes
  - Для Get запроса выбираем соотвествующий запрос (слева), далее выбираем Body и дальше raw
  - Для Post запроса тоже самое только нужно создать записть типа {"title": "new title"} 

Все это позволит универсально поднимать сервер и MongoDB для любого проекта (остаеться только обращаться к БД исходя и контекста технологий которые используем например React)
