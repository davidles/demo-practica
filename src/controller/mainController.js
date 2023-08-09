const arrPlatos = require('../dataBase/platos');

const mainController = {
    index: (req, res) =>{
        res.render('index', { platos: arrPlatos });
    },
    detalle: (req, res)  => {
        const {id} = req.params;
    
        const findPlato = arrPlatos.find((plato) =>  plato.id == id);

        res.render('detalleMenu', { platoSelect: findPlato })
    }
    
}

module.exports = mainController;