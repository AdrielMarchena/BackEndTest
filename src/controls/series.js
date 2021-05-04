const connection = require("../db/connection");

module.exports =
{
    async Create(request,response)
    {
        const { name, watched, seasons_qtd,sinopse,category,release_date } = request.body;
        

        try{
            await connection("series").select().where("name",name)
            .then(async function(rows)
            {
                if(!rows.length)
                {
                    const [id] =  await connection("series").insert({
                        name,
                        watched,
                        seasons_qtd,
                        sinopse,
                        category,
                        release_date
                    });
                    return response.json({ id, message: `New series < ${name} > Registered!` });
                }
                else
                    throw new Error(`The series ${name} is already registered!`);
            })
        }
        catch(error)
        {
            console.log(`Could not Create ${name}! Error: ${error}`);
            return response.status(400).json({message: `Could not Create ${name}! Error: ${error}` }); 
        }

    },

    /**
     * Return Serie By name or return all
     * @param {*} request 
     * @param {*} response 
     * @returns 
     */
    async Read(request,response)
    {
        const {name} = request.body;

        if(name === "" || name === undefined || name === null)
        {
            try
            {
                const serie = await connection("series")
                .select(
                    [
			            "id",
                        "name",
                        "watched",
                        "seasons_qtd",
                        "sinopse",
                        "category",
                        "release_date"
                    ]);
                return response.json( serie );
            }
            catch(error)
            {
                return response.status(400).json({message: `Could not Read!`, error: error }); 
            }
        }

        try
        {
            const serie = await connection("series")
            .select().where("name",name);

            if(!serie.length)
                throw new Error(`The series ${name} is not registered!`);
            
            return response.json( serie );
   
        }
        catch(error)
        {
            return response.status(400).json({message: `Could not Read ${name} !`, error: error }); 
        }
    },

    async Patch(request,response)
    {
        const { id,watched } = request.body;

        try
        {
            await connection("series")
            .where({id: id})
            .update(
            {
                watched
            });

            return response.json({ id, message: `< ${id} > Updated!` });
        }
        catch(Error)
        {
            return response.status(400).json({message: `Could not Update ${id} !`, error: error }); 
        }
    },

    async Update(request,response)
    {
        const { id,name, watched, seasons_qtd,sinopse,category,release_date } = request.body;

        try
        {
            await connection("series")
            .where({id: id})
            .update(
            {
                name,
                watched,
                seasons_qtd,
                sinopse,
                category,
                release_date
            });

            return response.json({ id, message: `< ${name} > Updated!` });
        }
        catch(Error)
        {
            return response.status(400).json({message: `Could not Update ${name} !`, error: error }); 
        }
    },

    async Delete(request,response)
    {
        const { id } = request.params;
        console.log(id);
        if(id === undefined || id < 1 || id === null)
            throw new Error(`Id can not be undefined or null or less than 0!`);

        console.log(id);
        try
        {
            await connection("series").where("id",id).delete();
            return response.status(204).send();
        }
        catch(error)
        {
            return response.status(400).json({message: `Could not Update ${id} !`, error: error }); 
        }
    }
}