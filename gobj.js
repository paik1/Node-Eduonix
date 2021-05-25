var cars = function(brand){
    console.log(global[brand])
};

global.toyota = "vios";

global.honda = "crv";

cars("toyota");

cars("honda");