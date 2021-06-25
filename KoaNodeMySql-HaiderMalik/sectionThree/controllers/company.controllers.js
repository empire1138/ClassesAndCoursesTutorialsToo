module.exports = {
    async create(ctx){
        try{


         ctx.body =  await ctx.db.Company.create({
                name: ctx.request.body.name,
                city: ctx.request.body.city,
                address: ctx.request.address
            })


        }catch(error){
            ctx.throw(500, err);
        }
    },

    async find(ctx){
        try{

           ctx.body = await ctx.db.Company.findAll({})

        }
        catch(err){
            throw err;
        }
    }, 
    async findOne(ctx){
        try{
         const company =  await ctx.db.Company.findOne({
                id: ctx.params.id
            })
            if(!company){
                ctx.throw(404, 'Company id is invalid');
            }
            ctx.body = company;
        }catch(err){
            ctx.throw(500, err)
        }
    },
    async destroy(ctx){
        try{
            const results =  await ctx.db.Company.destroy({
                where:{   id: ctx.params.id}
               })
               if(!company){
                   ctx.throw(404, 'Company id is invalid');
               }
               ctx.body = results;
           }catch(err){
               ctx.throw(500, err)
           }
    },
    async update(ctx){
        try{
            const results =  await ctx.db.Company.update({
                where:{   id: ctx.params.id}
               })
               if(!company){
                   ctx.throw(404, 'Company id is invalid');
               }
               ctx.body = results;
           }catch(err){
               ctx.throw(500, err)
           }
    }

}