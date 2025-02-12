/* 
    Event Routes
    /api/events
*/

const { Router } = require('express');
const router = Router();
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require("../controllers/events");
const { validarJWT } = require('../middlewares/validar-jwt');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { isDate } = require('../helpers/isDate');

//Todas tienen que pasar por la validacion del JWT
router.use(validarJWT);


//Obtener eventos
router.get('/',
    getEventos
);


//Crear un nuevo eventos
router.post('/',
    [
        check('title', 'El titulo es obligatorio.').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom(isDate),
        check('end', 'Fecha de finalizacion es obligatoria').custom(isDate),
        validarCampos
    ],
    crearEvento
);

//Crear un nuevo eventos
router.put('/:id',
    [
        check('title', 'El titulo es obligatorio.').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom(isDate),
        check('end', 'Fecha de finalizacion es obligatoria').custom(isDate),
        validarCampos
    ],
    actualizarEvento
);

//Crear un nuevo eventos
router.delete('/:id',
    eliminarEvento
);

module.exports = router;