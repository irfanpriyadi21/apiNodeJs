'use strict';

var response = require('../res/res');
var connection = require('../connection/conn');

exports.users = function(req, res) {
    connection.query('SELECT * FROM users', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.index = function(req, res) {
    response.ok("Hello from the Node JS RESTful side!", res)
};

exports.findUsers = function(req, res) {
    var user_id = req.params.user_id;
    connection.query('SELECT * FROM users where id = ?',
    [ user_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.createUsers = function(req, res) {
    var full_name = req.body.full_name;
    var gender = req.body.gender;
    var jenjang = req.body.jenjang;
    var phone = req.body.phone;

    connection.query('INSERT INTO users (full_name, gender, jenjang, phone) values (?, ?, ?, ?)',
    [ full_name, gender, jenjang, phone ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil menambahkan user!", res)
        }
    });
};

exports.updateUsers = function(req, res) {
    var id = req.body.id;
    var full_name = req.body.full_name;
    var gender = req.body.gender;
    var jenjang = req.body.jenjang;
    var phone = req.body.phone;


    connection.query('UPDATE users SET full_name = ?, gender = ?, jenjang = ?, phone = ?, WHERE id = ?',
    [ full_name, gender, jenjang, phone, id], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil merubah user!", res)
        }
    });
};

exports.deleteUsers = function(req, res) {
    var id = req.body.id;

    connection.query('DELETE FROM users WHERE id = ?',
    [id], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil menghapus user!", res)
        }
    });
};

