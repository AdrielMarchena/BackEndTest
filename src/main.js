const seriesController = require("./controls/series");
function main(router)
{
    //Create
    router.post("/",seriesController.Create);
    //Read
    router.get("/",seriesController.Read);
    //Update
    router.put("/",seriesController.Update);
    //Update
    router.patch("/",seriesController.Patch);
    //Delete
    router.delete("/:id",seriesController.Delete);

    return router;
}

module.exports = main;