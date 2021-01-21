'use strict';

module.exports = function(app) {
    var todoList = require('./../controller/controller');

    app.route('/')
        .get(todoList.index);

    app.route('/users')
        .get(todoList.users);

    app.route('/get_users/:id')
        .get(todoList.findUsers);

    app.route('/post_users')
        .post(todoList.createUsers);

    app.route('/update_users/:id')
        .put(todoList.updateUsers);
    
    app.route('/delete_users/:id')
        .delete(todoList.deleteUsers);
};