module.exports = (app) =>{
    require("./init_middleware")(app);
    require("./mongoose_middleware")(app);
    require("./secure_middleware")(app);
    require("./static_middleware")(app);
};