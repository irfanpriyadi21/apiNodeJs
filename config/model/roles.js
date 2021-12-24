const Sequelize = require('sequelize');
const db = require('../database/mysql');
// const bcrypt = require("bcrypt");


var roles = db.define('roles',
{
    name : Sequelize.STRING,
},{
    freezeTableName: true,
    timestamps: false,
    // instanceMethods:{
    //     generateHash(password){
    //         return bcrypt.hash(password, bcrypt.genSaltSync(8));
    //     },
    //     validPassword(password){
    //         return bcrypt.compare(password, this.password);
    //     }
    // }
    
});

module.exports = roles;