//Подключим express
var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var app = express();
var db;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Создадим post запрос - который создаст коллекцию (в данном случае Заметок) (в Postam выбираем post и создаем новые заметки например "title": "Note Title", "description":"new description")
app.post('/notes', function (req, res) {
    //Опишем данные (опишем как должна выглядит новая заметка)
    var newnote = {
        title: req.body.title,
        description: req.body.description
    };
    //Создадим коллекцию (в данном случае заметок)
    db.collection('notes').insert(newnote, function (err, result) {
        if (err) {
            console.log(err);
            return res.sendStatus(500); //Значит проблема на сервере
        }        
        res.send(newnote) //Вернуть данные (в данном случае заметки)
    })  
})

//Создадим get запрос - который будет вытаскивать данные из БД
app.get('/notes', function (req, res) {
    db.collection('notes').find().toArray(function (err, docs){
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs); //Выведим все данные из БД
    })
});

//Создадим get запрос - который будет выводить из данные из БД по переданному id в url (например http://localhost:3012/notes/5bef2f383197ba060f78c97f) - где 5bef2f383197ba060f78c97f - это id записи
app.get('/notes/:id', function (req, res) {
    db.collection('notes').findOne({ _id: ObjectID(req.params.id) }, function (err, doc) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(doc)
    })
});

//Создадим put запрос - который будет обновлять переданные в него данные в БД (в Postman укажем  url http://localhost:3012/notes/5befd6e6e3ee3e0822067b42) -  где цифры это id записи в БД которую мы хотим перезаписать дальше пишем (например "tetle": "new title")
app.put('/notes/:id', function (req, res) {
    db.collection('notes').update (
        {_id: ObjectID(req.params.id) },
        {title: req.body.title},
        {description: req.body.description},
        function (err, result) {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            }
            res.sendStatus(200);
        }
    )
});

//Создадим Delete запрос - который будет удалять запись в БД (например удалим запись через Postman  указав  url в нем  http://localhost:3012/notes/5bef2f383197ba060f78c97f) и выбрав метод delete - удалим запись с данным id
app.delete('/notes/:id', function (req, res) {
    db.collection('notes').deleteOne (
        {_id: ObjectID(req.params.id) },
        function (err, result) {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            }
            res.sendStatus(200);
        }
    )
});

//Подключим mongodb где myNotes - это имя нашей базы данных 
MongoClient.connect('mongodb://localhost:27017', function (err, client) {
    if (err) {
        return console.log(err);
    }
    db = client.db("notes");
    //Старт сервера только после запуска базы данных
    app.listen(3012, function() {
        console.log('Api app started')
    });
})

//Команда для запуска mongodb mongod (в отдельной вкладке после запуска сервера)
//Команда для запуска сервера node server.js
//Ссылка на проект http://localhost:3012/notes
