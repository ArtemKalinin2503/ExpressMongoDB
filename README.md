# ExpressMongoDB
Используем сервер Express и базу данных MongoDB
- Для запуска сначала установить зависимости sudo npm install

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
  - Для Get (получить данные) запроса выбираем соотвествующий запрос (слева), далее выбираем Body и дальше raw.
  - Для Post (создать данные) запроса тоже самое только нужно создать записть типа {"title": "new title"}. 
  - Для Put (изменить существуюшие данные) выполняеться также как и Post запрос (только в url нужно указать id записи например http://localhost:3012/notes/5befd6e6e3ee3e0822067b42) и уже дальше в теле описать новые данные {"title": "testPut"}.
  - Для Delete тоже в url указать id записи как и в запросе  Put и просто выполнить его.

Все это позволит универсально поднимать сервер (Express) и MongoDB для любого проекта (остаеться только обращаться к БД исходя и контекста технологий которые используем например React)

Полезные ссылки:
- https://loftblog.ru/material/5-realizuem-dobavlenie-i-obnovlenie-ispolnitelej-v-baze-dannyx/
- https://habr.com/post/192870/
- http://www.mongoing.com/docs/reference/method/db.collection.updateOne.html
