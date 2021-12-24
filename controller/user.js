const model = require("../config/model/index");
const bcrypt = require("bcrypt");
const controller = {};

controller.getAll = async function(req, res){
    try {
        await model.user.findAll(
            {
                // attributes: [
                //     "full_name"
                // ],
                include : [
                    {
                        model: model.roles,
                        attributes: [
                            "name"
                        ]
                    }
                ]
            }
        )
        .then ((result) => {
            if(result.length > 0){
                res.status(200).json({
                    code: 200,
                    message : "Get Method All User",
                    data: result
                });
            }else{
                res.status(201).json({
                    code: 201,
                    message : "Tidak Ada Data",
                    data : null,
                });
            }
        })
    } catch (error) {
        res.status(404).json({
            code: 404,
            message: error
        });    
    }
}

controller.getById = async function(req, res){
    try {
        await model.user.findAll({
            where: {
                id: req.params.id
            }
        }).then((result)=> {
            if(result.length > 0){
                res.status(200).json({
                    code: 200,
                    message : "Get Method User By Id",
                    data: result[0]
                });
            }else{
                res.status(201).json({
                    code: 201,
                    message : "Tidak Ada Data",
                    data : null,
                });
            }
        });
        
    } catch (error) {
        res.status(404).json({
            code: 404,
            message: error
        });     
    }
}

controller.postUser = async function(req, res){
    try {
        let data = req.body;
        data.password = await bcrypt.hash(data.password, bcrypt.genSaltSync(8));
        await model.user.create(data).then((result)=>{
            if(result){
                res.status(200).json({
                    code: 200,
                    message : "Berhasil Menyimpan data",
                    data: result[0]
                });
            }else{
                res.status(201).json({
                    code: 201,
                    message : "Gagal Menyimpan data",
                    data: null
                });
            }
        });
    }catch (error) {
        res.status(404).json({
            code: 404,
            message: error.errors[0].message
        });    
    }
}

controller.deleteUser = async function(req, res){
   try {
       await model.user.destroy({
           where: {
               id: req.params.id
           }
       }).then((result)=>{
        if(result){
            res.status(200).json({
                code: 200,
                message : `Berhasil Menghapus data id= ${req.params.id}`,
            });
        }else{
            res.status(201).json({
                code: 201,
                message : "Gagal Menghapus data",
                data: null
            });
        }
       });
   } catch (error) {
        res.status(404).json({
            code: 404,
            message: error
        });    
   } 
}

controller.updateUser = async function(req, res){
    try {
        let data = req.body;
        data.password = await bcrypt.hash(data.password, bcrypt.genSaltSync(8));
        await model.user.update(data, {
            where: {
                id: req.params.id
            }
        }).then((result)=>{
            if(result){
                res.status(200).json({
                    code: 200,
                    message : "Berhasil Menyimpan data !",
                });
            }else{
                res.status(201).json({
                    code: 201,
                    message : "Gagal Menyimpan data",
                    data: null
                });
            }
        });
    }catch (error) {
        res.status(404).json({
            code: 404,
            message: error.errors[0].message
        });    
    }
}

module.exports = controller;