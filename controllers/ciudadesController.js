const Models = require("../models/");

exports.ciudades_list = async (req, res) => {
    const result = await Models.Ciudades.findAll();    
    res.json(result);
};

exports.ciudades_create = async (req, res) => {
    try {
        await Models.Ciudades.create(req.body);
        res.location('/' + req.body.code)
        res.status(201).send();
    } catch (e) {
        console.error(e);
        res.status(500).send();
    }    
};

exports.usuarios_por_sede = async (req, res) => {
    console.log(req.params.ciudadCode);
    console.log(req.params.sedeCode);

    try {
        const result = await Models.Usuarios.findAll(
            {   attributes:['identification','name'],
                where:{ciudad_code: req.params.ciudadCode, sede_code:req.params.sedeCode}});
        res.json(result);        
    } catch (e) {
        console.error(e);
        res.status(500).send();
    }         
}
