const express = require('express');
const router = express.Router();
const controller = require('../controller/index');


router.get('/user', controller.user.getAll);
router.get('/user/:id', controller.user.getById);
router.post('/postUser', controller.user.postUser);
router.delete('/deleteUser/:id', controller.user.deleteUser);
router.put('/updateUser/:id', controller.user.updateUser);


// 'use strict';

// module.exports = function(app) {
//     var todoList = require('./../controller/controller');

//     app.route('/')
//         .get(todoList.index);

//     app.route('/users')
//         .get(todoList.users);

//     app.route('/users/:id')
//         .get(todoList.findUsers);

//     app.route('/post_users')
//         .post(todoList.createUsers);

//     app.route('/update_users/:id')
//         .put(todoList.updateUsers);
    
//     app.route('/delete_users/:id')
//         .delete(todoList.deleteUsers);
// };
module.exports = router;