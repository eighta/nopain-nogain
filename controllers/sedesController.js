const Models = require("../models/");

exports.sedes_list = async (req, res) => {
    const result = await Models.Sedes.findAll();    
    res.json(result);
};

exports.sedes_create = async (req, res) => {
    try {
        console.log(req.body)
        await Models.Sedes.create(req.body)
        res.location('/' + req.body.code)
        res.status(201).send();
    } catch (e) {
        console.error(e);
        res.status(500).send();
    }    
};