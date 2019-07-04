const helmet = require ("helmet"); //origen de la peticion es confiable

module.exports = (app) =>{ //es un parametro y eso hace referencia a un servidor
    app.set('trust proxy', 1); //proxy analisa las peticiones y determina si son confiables
    app.use(helmet()); //ejecuta la funcion
};