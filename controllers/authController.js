const jwt = require('jsonwebtoken');
const Settings = require("../config/settings");

exports.auth = (req, res) => {
    if(req.body.username === "admin" && req.body.password === "pass") {
        const payload = {check:  true};
        const token = jwt.sign(payload, Settings['llave'], {expiresIn: 1440 });
        res.json({mensaje: 'Autenticación correcta',token: token});
    } else {
        res.json({ mensaje: "Usuario o contraseña incorrectos"});
    }
}