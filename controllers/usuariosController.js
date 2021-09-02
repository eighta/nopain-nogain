const Models = require("../models/");

exports.usuarios_list = async (req, res) => {
    const result = await Models.Usuarios.findAll();    
    res.json(result);
};

exports.usuarios_create = async (req, res) => {
    try {
        // validate if already exist
        const alreadyExist = await Models.Usuarios
                .count({where:{identification:req.body.identification}})
                .then(count => {return count != 0; })

        if(alreadyExist){
            res.status(409).json({message: "El Usuario con identificacion: ["+ req.body.identification + "] ya se encuentra registrado" });
        }else{

            // validar que la sede exista
            const sedeExist = await Models.Sedes
                .count({where:{code:req.body.sede_code, ciudad_code:req.body.ciudad_code}})
                .then(count => {return count != 0; })

            if (sedeExist){
                await Models.Usuarios.create(req.body)
                res.location('/' + req.body.identification)
                res.status(201).send();
            }else{
                res.status(409).json({message: "La sede no se encuentra registrada en el sistema" });
            }
        }
        
    } catch (e) {
        console.error(e);
        res.status(500).send();
    }    
};