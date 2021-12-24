const Sequelize = require('sequelize');
const db = require('../database/mysql');
const roles = require('./roles');
// const bcrypt = require("bcrypt");


var user = db.define('users',
{
    role_id : Sequelize.INTEGER,
    full_name : Sequelize.STRING,
    gender : Sequelize.STRING,
    jenjang : Sequelize.STRING,
    phone : Sequelize.STRING,
    nik: Sequelize.INTEGER,
    username : Sequelize.STRING,
    password : Sequelize.STRING,
},{
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    // instanceMethods:{
    //     generateHash(password){
    //         return bcrypt.hash(password, bcrypt.genSaltSync(8));
    //     },
    //     validPassword(password){
    //         return bcrypt.compare(password, this.password);
    //     }
    // }
    
});
user.belongsTo(roles);

module.exports = user;